import { hasuraAdminClient } from './client'
import { CreateOneProductMutation } from '../app/data/graphql/create-product.mutation'
import { faker } from '@faker-js/faker'

const createProduct = async () => {
  await hasuraAdminClient.mutate({
    mutation: CreateOneProductMutation,
    variables: {
      name: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: '10.0',
    },
  })
}

for (let i = 0; i < 30; i++) {
  createProduct()
}
