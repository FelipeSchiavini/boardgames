import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'
import { Header } from '@/components/org.header'
import Footer from '@/components/footer.component'
import { NextAuthProvider } from '@/components/auth-provider.component'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})
export const metadata = {
  title: 'Spacetime',
  description: 'Uma cápsula do tempo com react, nextjs e tailwind',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="min-h-screen ">
          <NextAuthProvider>
            <>
              <Header />
              {children}
              <Footer />
            </>
          </NextAuthProvider>
        </main>
      </body>
    </html>
  )
}
