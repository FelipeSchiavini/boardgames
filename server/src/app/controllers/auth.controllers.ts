import { Get, HeaderParam, JsonController } from 'routing-controllers'
import axios from 'axios'
import gql from 'graphql-tag'
import { GoogleToken } from '../../utils/types/token.types'
import { hasuraAdminClient, hasuraHeaderConfig } from '../../db/client'
import { sign } from 'jsonwebtoken'
import { Role } from '../../utils/types/role.types'

// @JsonController('auth')
@JsonController('/auth')
export class AuthController {
  @Get('/google')
  async auth(@HeaderParam('authorization') token: string) {
    try {
      const tokenCode = token.replace('Bearer ', '')
      const { data: user } = await axios.get<GoogleToken>(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenCode}`,
      )
      const id = await hasuraAdminClient.mutate({
        mutation: gql`
          mutation MyMutation($user: user_insert_input = {}) {
            insert_user_one(object: $user) {
              email
              first_name
              id
              picture
              last_name
            }
          }
        `,
        variables: {
          user: {
            email: user.email,
            first_name: user.name,
            last_name: user.family_name,
            picture: user.picture,
          },
        },
        ...hasuraHeaderConfig,
      })

      const tokenSigned = sign(
        {
          data: {
            sub: id,
            role: Role.User,
            first_name: user.name,
          },
        },
        process.env.JWT_SECRET as string,
        { expiresIn: '24h' },
      )

      return { token: tokenSigned }
    } catch (e) {
      return e
    }
  }
}
