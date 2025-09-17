import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AquaRent - Premium Boat Rentals',
  description: 'Discover the freedom of the open water with our premium fleet of boats. From sunset cruises to fishing adventures, create unforgettable memories on the waves.',
  keywords: 'boat rental, yacht charter, fishing trips, sunset cruise, water sports, marina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}