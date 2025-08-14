import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enrollados.mx'

  // Ciudades principales para páginas específicas de SEO
  const cities = [
    'cdmx',
    'guadalajara',
    'monterrey',
    'puebla',
    'queretaro',
    'merida',
    'tijuana',
    'mexicali',
    'hermosillo',
    'torreon',
    'saltillo',
    'toluca',
    'pachuca',
    'veracruz',
    'leon',
    'aguascalientes',
    'chihuahua',
    'san-luis-potosi',
  ]

  // URLs principales
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/fechas`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/boletos`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Agregar páginas por ciudad para SEO local
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/ciudad/${city}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...cityRoutes]
}
