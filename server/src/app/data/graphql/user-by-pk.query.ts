import { TypedDocumentNode } from '@apollo/client'
import gql from 'graphql-tag'

export const GetUserByPk: TypedDocumentNode<any, any> = gql`
  query GetUserByPk($id: uuid!) {
    users_by_pk(id: $id) {
      email
      first_name
      last_name
      id
      picture
    }
  }
`
