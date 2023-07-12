import { Get, HeaderParam, JsonController } from 'routing-controllers'
import axios from 'axios'
import { GoogleToken } from '../../utils/types/token.types'
import { hasuraAdminClient, hasuraHeaderConfig } from '../../db/client'
import { sign } from 'jsonwebtoken'
import { Role } from '../../utils/types/role.types'
import { CreateUserMutation } from '../data/graphql/user.mutation'

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
      const userCreated = await hasuraAdminClient.mutate({
        mutation: CreateUserMutation,
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
            sub: userCreated.data?.insert_users_one?.id,
            role: Role.User,
            firstName: user.name,
          },
        },
        process.env.TOKEN_SECRET as string,
        { expiresIn: '24h' },
      )
      return { token: tokenSigned }
    } catch (e) {
      return e
    }
  }
}
