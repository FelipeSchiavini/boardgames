import { NextRequest, NextResponse } from 'next/server'
import { authMiddleware } from './middlewares/auth'

export const middleware = async (request: NextRequest) => {
  if (request.nextUrl.pathname === '/auth') {
    return await authMiddleware(request)
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/auth',
}
