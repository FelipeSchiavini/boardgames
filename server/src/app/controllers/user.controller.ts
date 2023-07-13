import { CurrentUser, Get, JsonController } from 'routing-controllers'
import { TokenUser } from '../../utils/types/token.types'
import { hasuraAdminClient, hasuraHeaderConfig } from '../../db/client'
import { GetUserByPk } from '../data/graphql/user-by-pk.query'

@JsonController('/user')
export class ProductsController {
  @Get('/')
  async getUser(@CurrentUser() tokenUser?: TokenUser) {
    console.log(
      '🚀 ~ file: user.controller.ts:10 ~ ProductsController ~ getUser ~ tokenUser:',
      tokenUser?.sub,
    )
    try {
      const user = await hasuraAdminClient.query({
        query: GetUserByPk,
        variables: {
          id: tokenUser?.sub,
        },
        fetchPolicy: 'no-cache',
        ...hasuraHeaderConfig,
      })

      console.log(
        '🚀 ~ file: user.controller.ts:25 ~ ProductsController ~ getUser ~ user.data.users_by_pk:',
        user.data.users_by_pk,
      )
      return user.data.users_by_pk
    } catch (err) {
      console.log(
        '🚀 ~ file: user.controller.ts:24 ~ ProductsController ~ getUser ~ err:',
        err,
      )
    }
  }
}
