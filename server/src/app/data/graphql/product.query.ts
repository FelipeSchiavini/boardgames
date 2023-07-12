import { TypedDocumentNode } from '@apollo/client'
import gql from 'graphql-tag'
import {
  GetAllProductsQueryQuery,
  GetAllProductsQueryQueryVariables,
} from '../../../utils/types/remote/remote-graphql-types'

export const GetAllProductsQuery: TypedDocumentNode<
  GetAllProductsQueryQuery,
  GetAllProductsQueryQueryVariables
> = gql`
  query GetAllProductsQuery {
    products {
      description
      id
      name
      picture
      price
    }
  }
`
