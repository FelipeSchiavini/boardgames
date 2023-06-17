import { api } from '@/lib/api'
import { input } from '@material-tailwind/react'
import { profile } from 'console'
import NextAuth, {
  Account,
  CallbacksOptions,
  PagesOptions,
  Profile,
  User,
} from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import { CredentialInput, Provider } from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'
import { headers } from 'next/headers'

interface GoogleProfile {
  iss: string
  azp: string
  aud: string
  sub: string
  email: string
  email_verified: true
  at_hash: string
  name: string
  picture: string
  given_name: string
  family_name: string
  locale: string
  iat: number
  exp: number
}

interface AuthOptions {
  providers: Provider[]
  pages: Partial<PagesOptions>
  callbacks: Pick<CallbacksOptions<Profile, Account>, 'signIn'>
}

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        '220791840297-clo8nr9m2p94dlu42mtaqmof84qimt93.apps.googleusercontent.com' as string,
      clientSecret: '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' as string,
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      api.defaults.headers.common.authorization = account?.access_token

      const a = await api.get('/auth/google')

      if (account?.provider === 'google') {
        const googleProfile = profile as GoogleProfile
        return googleProfile?.email_verified
      }
      return false
    },
    // async jwt({ token, account }) {
    //   console.log('🚀 ~ file: route.ts:58 ~ jwt ~ account:', account)
    //   console.log('🚀 ~ file: route.ts:58 ~ jwt ~ token:', token)
    //   if (token) {
    //     // token.accessToken = account.access_token
    //     const a = await api.get('auth/google', {
    //       headers: {
    //         authorization: 'Bearer ' + token,
    //       },
    //     })
    //     console.log('🚀 ~ file: route.ts:65 ~ jwt ~ a:', a)
    //   }
    //   return token
    // },
    // https://www.googleapis.com/oauth2/v3/userinfo?access_token=ya29.a0AWY7CknSRc6J4Xw7o8ttI2ZexV9KitWp8V11OI8JJVyUtDIZFFRoEWceSgW-NhPkoo7qWW1_sv0NUYlsr91uxn0NXSRD5TGLsHD7nw2FZgDd5Mx6Km7ddLAtxq6XjbTYw9EzEK_g3-iIwgD7_hU-n0el7VoKbwaCgYKAUMSARESFQG1tDrpx8ctwvGRr6cc2U3y4dyRFQ0165
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
