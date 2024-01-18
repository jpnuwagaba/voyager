import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Aleo } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const aleo = Aleo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Voyager | Invoice App',
  description: 'Voyager is a simple invoice app built to ease your business workflow.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
