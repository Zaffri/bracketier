import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Appbar from '@/components/Appbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bracketier',
  description: 'Tournament app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            {children}
          </div>
        </section>
      </body>
    </html>
  )
}
