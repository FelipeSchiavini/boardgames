import Fuse from 'fuse.js'

/**
 * # How to use
 *
 * 1. Call `buildIndex` (sending your search data)
 * 2. Call `search`
 *
 */

/// /////////////////////////////////////////////////////////////////////////////////////////////////

interface SearchIndex<D> {
  search: (term: string) => Promise<D[]>
}

export interface IndexParams<D> {
  data: D[]
  keys?: {
    name: keyof D
    weight: number
  }[]
  // Whether to sort the result list, by score.
  shouldSort?: boolean
  threshold?: number
  minMatchCharLength?: number
  maxItemsReturned?: number
}

export class FuseSearchIndex<D> implements SearchIndex<D> {
  private searchIndex: Fuse<D>
  private maxItemsReturned: number

  constructor(indexParams: IndexParams<D>) {
    this.searchIndex = this.buildIndex(indexParams)
    this.maxItemsReturned = indexParams.maxItemsReturned || 10
  }

  /**
   *
   * @param term  the term to be search
   */
  search = async (term: string) => {
    const result = this.searchIndex.search(term)
    const slicedItems =
      this.maxItemsReturned > 0
        ? result.slice(0, this.maxItemsReturned)
        : result
    const items = slicedItems.map((r) => r.item)
    return items
  }

  /**
   * builds the overall index based on the options
   */
  private buildIndex = (indexParams: IndexParams<D>) => {
    const options: Fuse.IFuseOptions<D> = {
      shouldSort: indexParams?.shouldSort ?? true,
      threshold: indexParams?.threshold ?? 0.4,
      minMatchCharLength: indexParams?.minMatchCharLength ?? 1,
      includeScore: true,
    }
    if (indexParams.keys) {
      options.keys = indexParams?.keys as { name: string; weight: number }[]
    }
    const searchIndex = new Fuse<D>(indexParams.data, options)
    return searchIndex
  }
}
