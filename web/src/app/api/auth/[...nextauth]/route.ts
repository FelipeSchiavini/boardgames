import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import { cookies } from 'next/headers'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID_CLIENT ?? '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRECT ?? '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        // console.log(account.access_token)
        const apiTokenResponse = await fetch(
          'http://localhost:3333/auth/google',
          {
            headers: {
              method: 'GET',
              authorization: `Bearer ${account.access_token}`,
              Accept: 'application/json',
            },
          },
        )
        const apiToken = await apiTokenResponse.json()
        const nextCookies = cookies()
        nextCookies.set('token', apiToken.token)
        return true
      }
      return false
    },
  },
})

export { handler as GET, handler as POST }
