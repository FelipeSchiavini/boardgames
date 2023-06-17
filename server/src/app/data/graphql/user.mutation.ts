import gql from 'graphql-tag'

export const CreateUserMutation = gql`
  mutation MyMutation($user: user_insert_input = {}) {
    insert_user_one(object: $user) {
      email
      first_name
      id
      profile_picture
      last_name
    }
  }
`
