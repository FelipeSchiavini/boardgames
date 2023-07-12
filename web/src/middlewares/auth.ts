import { NextRequest, NextResponse } from 'next/server'

export const authMiddleware = async (request: NextRequest) => {
  const acessToken = request.nextUrl.searchParams.get('token')
  const apiTokenResponse = await fetch('http://localhost:3333/auth/google', {
    headers: {
      method: 'GET',
      authorization: `Bearer ${acessToken}`,
      Accept: 'application/json',
    },
  })
  const apiToken = await apiTokenResponse.json()

  return NextResponse.redirect(new URL('/', request.url), {
    headers: {
      'Set-Cookie': `token=${apiToken.token}; Path=/; HttpOnly; max-age=20;`,
    },
  })
}
