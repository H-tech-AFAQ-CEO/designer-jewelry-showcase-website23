import { Analytics } from '@vercel/analytics/next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const displayFont = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600'], style: ['normal', 'italic'], display: 'swap' })
const sansFont = DM_Sans({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Atelier North — Objects with intention',
  description: 'A four-part editorial home for quietly considered jewellery, bespoke watches, and leather straps made by hand in London.',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${sansFont.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
