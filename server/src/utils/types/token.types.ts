import { Role } from './role.types'

export interface TokenUser {
  role: Role
  sub: string
  firstName: string
}

export interface GoogleToken {
  sub: string
  name: string
  given_name: string
  family_name: string
  profile: string
  picture: string
  email: string
  email_verified: true
  locale: string
  hd: string
}
