"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Bell } from "lucide-react"

// JSON data structure - easy to edit and add more events
const showData = {
  page: {
    title: "ENROLLADOS",
    subtitle: "SHOW EN VIVO",
    description:
      "Los íconos de la comedia y la televisión mexicana se unen en un nuevo formato para llenarte de risas y diversión.",
    tagline: "LA REUNIÓN",
    hosts: "CON ADAL, YORDI, MAURICIO, ROXANNA, GABY Y LALO",
    season: "ÚNICA TEMPORADA",
  },
  announcement: {
    text: "Boletos a la venta a partir del viernes 15 de agosto — 11:00 am",
    start: "2025-08-15T11:00:00-06:00",
  },
  dates: [
    {
      id: "2026-01-15-mxl",
      date: "2026-01-15",
      time: "20:30",
      city: "MEXICALI",
      venue: "AUDITORIO PSF",
      status: "coming_soon",
    },
    {
      id: "2026-01-16-tij",
      date: "2026-01-16",
      time: "20:30",
      city: "TIJUANA",
      venue: "FORO TIJUANA",
      status: "coming_soon",
    },
    {
      id: "2026-01-17-her",
      date: "2026-01-17",
      time: "20:30",
      city: "HERMOSILLO",
      venue: "CENTRO DE USOS MÚLTIPLES",
      status: "coming_soon",
    },
    {
      id: "2026-01-21-tor",
      date: "2026-01-21",
      time: "20:30",
      city: "TORREÓN",
      venue: "COLISEO CENTENARIO",
      status: "coming_soon",
    },
    {
      id: "2026-01-22-sal",
      date: "2026-01-22",
      time: "20:30",
      city: "SALTILLO",
      venue: "PARQUE DE LAS MARAVILLAS",
      status: "coming_soon",
    },
    {
      id: "2026-01-24-mty",
      date: "2026-01-24",
      time: "20:30",
      city: "MONTERREY",
      venue: "SHOWCENTER COMPLEX",
      status: "coming_soon",
    },
    {
      id: "2026-01-28-tol",
      date: "2026-01-28",
      time: "20:30",
      city: "TOLUCA",
      venue: "TEATRO MORELOS",
      status: "coming_soon",
    },
    {
      id: "2026-01-31-cdmx",
      date: "2026-01-31",
      time: "20:30",
      city: "CDMX",
      venue: "PEPSI CENTER",
      status: "coming_soon",
    },
    {
      id: "2026-02-04-pac",
      date: "2026-02-04",
      time: "20:30",
      city: "PACHUCA",
      venue: "AUDITORIO EXPLANADA",
      status: "coming_soon",
    },
    {
      id: "2026-02-05-pue",
      date: "2026-02-05",
      time: "20:30",
      city: "PUEBLA",
      venue: "AUDITORIO METROPOLITANO",
      status: "coming_soon",
    },
    {
      id: "2026-02-06-mer",
      date: "2026-02-06",
      time: "20:30",
      city: "MÉRIDA",
      venue: "FORO GNP",
      status: "coming_soon",
    },
    {
      id: "2026-02-07-ver",
      date: "2026-02-07",
      time: "20:30",
      city: "VERACRUZ",
      venue: "AUDITORIO BENITO JUAREZ",
      status: "coming_soon",
    },
    {
      id: "2026-02-11-que",
      date: "2026-02-11",
      time: "20:30",
      city: "QUERÉTARO",
      venue: "AUDITORIO JOSEFA ORTIZ DE DOMINGUEZ",
      status: "coming_soon",
    },
    {
      id: "2026-02-12-leo",
      date: "2026-02-12",
      time: "20:30",
      city: "LEÓN",
      venue: "POLIFORUM",
      status: "coming_soon",
    },
    {
      id: "2026-02-13-ags",
      date: "2026-02-13",
      time: "20:30",
      city: "AGUASCALIENTES",
      venue: "CENTRO DE CONVENCIONES",
      status: "coming_soon",
    },
    {
      id: "2026-02-18-chi",
      date: "2026-02-18",
      time: "20:30",
      city: "CHIHUAHUA",
      venue: "ARENA CÓRNER SPORT",
      status: "coming_soon",
    },
    {
      id: "2026-02-21-gdl",
      date: "2026-02-21",
      time: "20:30",
      city: "GUADALAJARA",
      venue: "TEATRO GALERIAS",
      status: "coming_soon",
    },
    {
      id: "2026-02-28-slp",
      date: "2026-02-28",
      time: "20:30",
      city: "S.L. POTOSÍ",
      venue: "TEATRO DE LA CIUDAD TANGAMANGA 1",
      status: "coming_soon",
    },
  ],
  ui: {
    cta: {
      coming_soon: "PRÓXIMAMENTE",
      on_sale: "COMPRAR BOLETOS",
      sold_out: "AGOTADO",
    },
  },
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
  return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, "0")}`
}

export function EnrolladosShow() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800">
      <div className="bg-red-500 text-white px-3 sm:px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <Bell className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium leading-tight">{showData.announcement.text}</span>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="text-center mb-6 sm:mb-8">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="bg-blue-600 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 transform -rotate-1 sm:-rotate-2 shadow-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-wider leading-none">
                {showData.page.title}
              </h1>
              <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-1 sm:mt-2 tracking-wide flex items-center justify-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
                {showData.page.subtitle}
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8 px-2 sm:px-0">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OR-Campan%CC%83a_General_1x1_compressed.jpg-SofY214tf3V3l4FgiK2z7MDCGK3GHs.jpeg"
              alt="ENROLLADOS Cast"
              className="mx-auto rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover"
            />
          </div>

          <div className="mb-6 sm:mb-8 px-4 sm:px-6">
            <p className="text-white/80 text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-2xl mx-auto">
              Los íconos de la comedia y la televisión mexicana se unen en un nuevo formato para llenarte de risas y
              diversión, aprovecha esta oportunidad y acompaña a Adal, Yordi, Mauricio, Roxanna, Gaby y Lalo en esta
              nueva aventura totalmente en vivo.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 leading-tight">
              {showData.page.tagline}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-bold leading-tight">
              {showData.page.hosts}
            </p>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 font-black">
            {showData.page.season}
          </Badge>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {showData.dates.map((show) => (
              <div
                key={show.id}
                className={`bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 cursor-pointer hover:bg-white/30 hover:scale-105 ${
                  selectedCity === show.city ? "border-yellow-400 bg-white/30" : "border-white/30"
                }`}
                onClick={() => setSelectedCity(selectedCity === show.city ? null : show.city)}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="text-white font-black text-base sm:text-lg">{formatDate(show.date)}</div>
                  <div className="text-white font-bold text-lg sm:text-xl">{show.city}</div>
                </div>

                <div className="space-y-1 sm:space-y-2 text-white/90 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{show.time} hrs</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-3 sm:mt-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm py-2"
                  disabled={show.status === "coming_soon"}
                >
                  {showData.ui.cta[show.status as keyof typeof showData.ui.cta]}
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <div className="text-white/80 text-xs sm:text-sm">
            Más información en <span className="font-bold">musicvibe.mx</span>
          </div>
        </div>
      </div>
    </div>
  )
}
