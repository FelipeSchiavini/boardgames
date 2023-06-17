import { Action } from 'routing-controllers'
import { JwtPayload, verify } from 'jsonwebtoken'

export const authorizationChecker = async (action: Action, roles: any[]) => {
  const token = action.request.headers.authorization
  const decoded = (await verify(
    token.replace('Bearer ', ''),
    process.env.JWT_SECRET as string,
  )) as JwtPayload
  const role = decoded.data?.role
  if (roles.includes(role)) {
    return true
  }
  return true
}
