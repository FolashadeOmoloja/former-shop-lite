import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopLite',
  description: 'An eccormmerce marketplace for small business owners to sell their goods and potential customers to find quality products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${inter.className} font-sans relative h-full antialiased`}>
        {children}
      </body>
    </html>
  )
}
