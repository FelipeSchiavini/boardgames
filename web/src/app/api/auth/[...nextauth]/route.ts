import NextAuth, {
  Account,
  CallbacksOptions,
  PagesOptions,
  Profile,
} from 'next-auth'
import { Provider } from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'

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
      clientId: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_SECRECT as string,
      profile(profile, tokens) {
        return {
          ...profile,
          id: profile.sub,
          idToken: tokens.id_token,
          accessToken: tokens.access_token,
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        const googleProfile = profile as GoogleProfile

        return googleProfile?.email_verified
          ? `/auth?token=${account.access_token}`
          : '/'
      }
      return false
    },

    // https://www.googleapis.com/oauth2/v3/userinfo?access_token=ya29.a0AWY7CknSRc6J4Xw7o8ttI2ZexV9KitWp8V11OI8JJVyUtDIZFFRoEWceSgW-NhPkoo7qWW1_sv0NUYlsr91uxn0NXSRD5TGLsHD7nw2FZgDd5Mx6Km7ddLAtxq6XjbTYw9EzEK_g3-iIwgD7_hU-n0el7VoKbwaCgYKAUMSARESFQG1tDrpx8ctwvGRr6cc2U3y4dyRFQ0165
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
