import { Get, JsonController } from 'routing-controllers'
import { GetAllProductsQuery } from '../data/graphql/product.query'
import { hasuraAdminClient, hasuraHeaderConfig } from '../../db/client'

@JsonController('/products')
export class ProductsController {
  @Get('/')
  async getAllProducts() {
    const products = await hasuraAdminClient.query({
      query: GetAllProductsQuery,
      fetchPolicy: 'no-cache',
      ...hasuraHeaderConfig,
    })

    return products.data.products
  }
}
