import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import localFont from 'next/font/local'
import Footer from '@/components/Footer'

const neulisAlt = localFont({
  src: [
    {
      path: '../../public/fonts/NeulisAlt-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeulisAlt-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeulisAlt-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeulisAlt-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeulisAlt-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neulis-alt',
})

export const metadata: Metadata = {
  title: 'GF Consulting - Consultoria Financeira para PME',
  description: 'GF Consulting',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${neulisAlt.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
