import gql from 'graphql-tag'

export const CreateUserMutation = gql`
  mutation MyMutation($user: users_insert_input!) {
    insert_users_one(object: $user) {
      email
      first_name
      id
      picture
      last_name
    }
  }
`
