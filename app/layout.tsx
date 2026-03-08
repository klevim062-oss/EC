import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ECONYX\u2122 \u2014 Organiza\u00e7\u00e3o Financeira (Planilha + IA)',
  description: 'Pare de decidir no escuro. Planilha inteligente com IA para organizar sua vida financeira, controlar cart\u00f5es e ter clareza do m\u00eas.',
}

export const viewport: Viewport = {
  themeColor: '#05070B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
