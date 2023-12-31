import { Action } from 'routing-controllers'
import { JwtPayload, verify } from 'jsonwebtoken'
import { TokenUser } from '../../utils/types/token.types'

export const currentUserChecker = async (action: Action) => {
  const token = action?.request?.headers.authorization

  const decoded = (await verify(
    token.replace('Bearer ', ''),
    process.env.TOKEN_SECRET as string,
  )) as JwtPayload
  return decoded.data as TokenUser
}
