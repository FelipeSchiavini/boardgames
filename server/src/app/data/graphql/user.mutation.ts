import { TypedDocumentNode } from '@apollo/client'
import gql from 'graphql-tag'
import {
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables,
} from '../../../utils/types/remote/remote-graphql-types'

export const CreateUserMutation: TypedDocumentNode<
  CreateUserMutationMutation,
  CreateUserMutationMutationVariables
> = gql`
  mutation CreateUserMutation($user: users_insert_input!) {
    insert_users_one(object: $user) {
      email
      first_name
      id
      picture
      last_name
    }
  }
`
