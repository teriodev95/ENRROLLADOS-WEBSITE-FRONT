import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'enrolladosenvivo.com'),
  title: {
    default: 'ENROLLADOS — Show en vivo',
    template: '%s | ENROLLADOS',
  },
  description:
    'ENROLLADOS: la reunión en vivo de íconos de la comedia y la televisión mexicana. Fechas, ciudades, boletos y noticias oficiales.',
  keywords: [
    'Enrollados',
    'show en vivo',
    'comedia en México',
    'tour de comedia',
    'stand up',
    'entretenimiento',
    'boletos',
    'gira 2026',
    'Adal',
    'Yordi',
    'Gaby',
    'Roxanna',
    'Lalo',
    'Mauricio',
    'Auditorio Nacional',
    'Arena Monterrey',
    'CDMX',
    'Guadalajara',
    'Monterrey',
    'Puebla',
    'Querétaro',
    'Mérida',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ENROLLADOS — Show en vivo',
    description:
      'Los íconos de la comedia y la TV mexicana en un nuevo formato. Consulta ciudades, fechas y compra boletos.',
    url: '/',
    siteName: 'ENROLLADOS',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/placeholder.jpg',
        width: 1200,
        height: 630,
        alt: 'ENROLLADOS — arte oficial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENROLLADOS — Show en vivo',
    description:
      'Fechas, ciudades y boletos del show ENROLLADOS. La reunión de la comedia mexicana.',
    images: ['/placeholder.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: 'ENROLLADOS',
  publisher: 'ENROLLADOS',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
