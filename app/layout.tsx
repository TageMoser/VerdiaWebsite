import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const description = 'En tynn sensormatte i setet viser hvor trykket bygger seg opp, varsler personalet i tide og dokumenterer avlastningen automatisk.'

export const metadata: Metadata = { metadataBase: new URL('https://verdanmedical.com'), title: 'Verdan Medical | Trykkmåling i setet for rullestolbrukere', description, applicationName: 'Verdan Medical', openGraph: { title: 'Verdan Medical | Trykkmåling i setet for rullestolbrukere', description, siteName: 'Verdan Medical', images: ['/images/wheelchair-hero.png'], locale: 'nb_NO', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Verdan Medical | Trykkmåling i setet for rullestolbrukere', description, images: ['/images/wheelchair-hero.png'] }, icons: { icon: '/icon.svg' } }
export const viewport: Viewport = { themeColor: '#F4F5F6', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="nb"><body className={inter.className}>{children}</body></html> }
