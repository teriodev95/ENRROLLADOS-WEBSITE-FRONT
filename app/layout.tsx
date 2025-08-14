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
    'ENROLLADOS: la reunión en vivo del elenco de Otro Rollo. Adal Ramones, Yordi Rosado, Mauricio Castillo, Roxana Castellanos, Gaby Platas y Lalo España. Fechas, ciudades y boletos oficiales.',
  keywords: [
    // Marca y concepto
    'Enrollados', 'ENROLLADOS show', 'ENROLLADOS tour', 'ENROLLADOS 2026',
    // Programa origen
    'Otro Rollo', 'elenco de Otro Rollo', 'reunión Otro Rollo',
    // Talento
    'Adal Ramones', 'Yordi Rosado', 'Mauricio Castillo', 'Roxana Castellanos', 'Gaby Platas', 'Lalo España',
    // Categorías y transaccionales
    'show en vivo', 'comedia en México', 'tour de comedia', 'stand up', 'entretenimiento',
    'boletos', 'boletos en línea', 'compra de boletos', 'preventas',
    // Intención local/geográfica
    'gira 2026', 'tour México 2026', 'CDMX', 'Guadalajara', 'Monterrey', 'Puebla', 'Querétaro', 'Mérida', 'Tijuana', 'Mexicali', 'Hermosillo', 'Torreón', 'Saltillo', 'Toluca', 'Pachuca', 'Veracruz', 'León', 'Aguascalientes', 'Chihuahua', 'San Luis Potosí',
    // Venues frecuentes
    'Pepsi Center', 'Showcenter Complex', 'Auditorio Explanada', 'Auditorio Metropolitano', 'Foro GNP', 'Auditorio Benito Juárez', 'Auditorio Josefa Ortiz de Domínguez', 'Poliforúm', 'Coliseo Centenario', 'Centro de Usos Múltiples', 'Tangamanga', 'Teatro Morelos'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ENROLLADOS — Show en vivo',
    description:
      'La reunión en vivo del elenco de Otro Rollo: Adal Ramones, Yordi Rosado, Mauricio Castillo, Roxana Castellanos, Gaby Platas y Lalo España. Consulta ciudades, fechas y compra boletos.',
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
      'Fechas, ciudades y boletos oficiales de ENROLLADOS con el elenco de Otro Rollo: Adal Ramones, Yordi Rosado, Mauricio Castillo, Roxana Castellanos, Gaby Platas y Lalo España.',
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
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
}

// JSON-LD básico para SEO (Website + Organization)
function JsonLd() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ENROLLADOS',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://enrolladosenvivo.com',
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.youtube.com',
      'https://x.com',
    ],
    member: [
      'Adal Ramones',
      'Yordi Rosado',
      'Mauricio Castillo',
      'Roxana Castellanos',
      'Gaby Platas',
      'Lalo España',
    ],
  }
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
  )
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
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  )
}
