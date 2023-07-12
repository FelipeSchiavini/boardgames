import CustomCarousel from '@/components/org-carrosel'
import { Separator } from '@/components/utils.component'
import { getProducts } from './data/server/get-products'
import { SearchInput } from '@/components/input.component'
import { ProductList } from '@/components/product-list.component'

const Home = async () => {
  const products = await getProducts()

  return (
    <>
      <CustomCarousel />
      <Separator />
      <SearchInput />
      <Separator />
      <ProductList products={products} />
    </>
  )
}
export default Home
