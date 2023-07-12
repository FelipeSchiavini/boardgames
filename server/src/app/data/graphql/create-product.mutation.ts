import gql from 'graphql-tag'

export const CreateOneProductMutation = gql`
  mutation CreateOneProductMutation($object: products_insert_input!) {
    insert_products_one(object: $object) {
      id
    }
  }
`
