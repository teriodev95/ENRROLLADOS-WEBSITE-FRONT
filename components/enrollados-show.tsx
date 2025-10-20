"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Bell, ExternalLink, Search, X } from "lucide-react"

// Datos de eventos ENROLLADOS desde Funticket API
const showData = {
  page: {
    title: "ENROLLADOS",
    subtitle: "SHOW EN VIVO",
    description:
      "Los íconos de la comedia y la televisión mexicana se unen en un nuevo formato para llenarte de risas y diversión.",
    tagline: "LA REUNIÓN",
    hosts: "CON ADAL RAMONES, YORDI ROSADO, MAURICIO CASTILLO, ROXANA CASTELLANOS, GABY PLATAS Y LALO ESPAÑA",
    season: "ÚNICA TEMPORADA",
  },
  announcement: {
    text: "¡Boletos disponibles! Asegura tu lugar",
    start: "2025-08-15T11:00:00-06:00",
  },
  dates: [
    {
      id: "2026-01-16-mxl",
      date: "2026-01-16",
      time: "20:30",
      city: "MEXICALI",
      venue: "AUDITORIO PSF",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=236",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-mexicali"
    },
    {
      id: "2026-01-23-sal",
      date: "2026-01-23",
      time: "20:30",
      city: "SALTILLO",
      venue: "PARQUE DE LAS MARAVILLAS",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=226",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-saltillo"
    },
    {
      id: "2026-01-29-tol",
      date: "2026-01-29",
      time: "20:30",
      city: "TOLUCA",
      venue: "TEATRO MORELOS",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=225",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-toluca"
    },
    {
      id: "2026-02-06-pue",
      date: "2026-02-06",
      time: "20:30",
      city: "PUEBLA",
      venue: "AUDITORIO METROPOLITANO",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=222",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-puebla"
    },
    {
      id: "2026-02-08-ver",
      date: "2026-02-08",
      time: "20:30",
      city: "VERACRUZ",
      venue: "AUDITORIO BENITO JUÁREZ",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=250",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-veracruz"
    },
    {
      id: "2026-02-12-que",
      date: "2026-02-12",
      time: "20:30",
      city: "QUERÉTARO",
      venue: "AUDITORIO JOSEFA ORTIZ DE DOMÍNGUEZ",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=249",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-queretaro"
    },
    {
      id: "2026-02-13-leo",
      date: "2026-02-13",
      time: "20:30",
      city: "LEÓN",
      venue: "POLIFORÚM",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=223",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-leon"
    },
    {
      id: "2026-02-14-ags",
      date: "2026-02-14",
      time: "20:30",
      city: "AGUASCALIENTES",
      venue: "CENTRO DE CONVENCIONES",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=245",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-aguas-calientes"
    },
    {
      id: "2026-02-19-chi",
      date: "2026-02-19",
      time: "20:30",
      city: "CHIHUAHUA",
      venue: "ARENA CÓRNER SPORT",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=233",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-chihuahua"
    },
    {
      id: "2026-02-22-gdl",
      date: "2026-02-22",
      time: "20:30",
      city: "GUADALAJARA",
      venue: "TEATRO GALERÍAS",
      status: "on_sale",
      links: [
        {
          label: "Boletos (21:00 hrs)",
          url: "https://eventos.funticket.mx/boletos/es/entradas-teatro-otro-rollo-guadalajara-21-21",
          ticketCategory: "buy"
        },
        {
          label: "Boletos (18:00 hrs)",
          url: "https://eventos.funticket.mx/boletos/es/entradas-teatro-otro-rollo-guadalajara-21",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-guadalajara"
    },
    {
      id: "2026-03-01-slp",
      date: "2026-03-01",
      time: "20:30",
      city: "SAN LUIS POTOSÍ",
      venue: "TANGAMANGA",
      status: "on_sale",
      links: [
        {
          label: "Comprar Boletos",
          url: "https://eventos.funticket.mx/boletos/es/comprarEvento?idEvento=237",
          ticketCategory: "buy"
        }
      ],
      details: "https://funticket.mx/evento/enrollados-san-luis-potosi"
    }
  ],
  ui: {
    cta: {
      coming_soon: "PRÓXIMAMENTE",
      on_sale: "COMPRAR BOLETOS",
      sold_out: "AGOTADO",
    },
  },
}

function formatDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number)
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"]
  return `${months[month - 1]} ${String(day).padStart(2, "0")}`
}

export function EnrolladosShow() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  // Filtrar eventos por búsqueda
  const filteredDates = showData.dates.filter((show) =>
    show.city.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Obtener lista única de ciudades
  const uniqueCities = Array.from(new Set(showData.dates.map((show) => show.city))).sort()

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
          <div className="relative inline-block mb-4 sm:mb-6 group">
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 transform -rotate-1 sm:-rotate-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:-rotate-2 border-4 border-blue-400/30 hover:border-blue-300/60">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-wider leading-none group-hover:tracking-widest transition-all duration-500">
                {showData.page.title}
              </h1>
              <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold mt-1 sm:mt-2 tracking-wide flex items-center justify-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50 group-hover:scale-125 transition-transform"></div>
                {showData.page.subtitle}
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50 group-hover:scale-125 transition-transform"></div>
              </div>
            </div>
          </div>

          <div className="mb-6 sm:mb-8 px-2 sm:px-0 group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OR-Campan%CC%83a_General_1x1_compressed.jpg-SofY214tf3V3l4FgiK2z7MDCGK3GHs.jpeg"
              alt="ENROLLADOS Cast"
              className="mx-auto rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl object-cover transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:shadow-blue-500/30 border-4 border-transparent hover:border-blue-400/40"
            />
          </div>

          <div className="mb-6 sm:mb-8 px-4 sm:px-6">
            <p className="text-white/80 text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-2xl mx-auto">
              Los íconos de la comedia y la televisión mexicana se unen en un nuevo formato para llenarte de risas y
              diversión, aprovecha esta oportunidad y acompaña a Adal, Yordi, Mauricio, Roxanna, Gaby y Lalo en esta
              nueva aventura totalmente en vivo.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto transition-all duration-500 hover:bg-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border-2 border-white/20 hover:border-white/40">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-1 sm:mb-2 leading-tight transition-all duration-300 hover:text-yellow-300">
              {showData.page.tagline}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-bold leading-tight transition-all duration-300 hover:text-white">
              {showData.page.hosts}
            </p>
          </div>
        </div>

        <div className="text-center mb-6 sm:mb-8">
          <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-base sm:text-lg lg:text-xl px-4 sm:px-6 py-2 font-black transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-blue-500/50 border-2 border-blue-400/30 hover:border-blue-300/60">
            {showData.page.season}
          </Badge>
        </div>

        {/* FAB - Floating Action Button */}
        <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 font-black text-sm sm:text-base border-4 border-blue-400/30 hover:border-blue-300/60"
          >
            <Search className="w-5 h-5" />
            BUSCAR CIUDAD
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          {filteredDates.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <Search className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-white/40 mb-4" />
              <p className="text-white/80 text-lg sm:text-xl font-bold mb-2">No se encontraron eventos</p>
              <p className="text-white/60 text-sm sm:text-base">
                Intenta buscar otra ciudad o{" "}
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-yellow-300 hover:text-yellow-200 underline font-semibold transition-colors"
                >
                  ver todos los eventos
                </button>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {filteredDates.map((show, index) => (
              <div
                key={show.id}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`group bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 cursor-pointer hover:bg-white/30 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4 ${
                  selectedCity === show.city
                    ? "border-yellow-400 bg-white/30 shadow-xl shadow-yellow-400/40 scale-105"
                    : "border-white/30 hover:border-white/60"
                }`}
                onClick={() => setSelectedCity(selectedCity === show.city ? null : show.city)}
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="text-white font-black text-base sm:text-lg group-hover:text-yellow-300 transition-colors duration-300">
                    {formatDate(show.date)}
                  </div>
                  <div className="text-white font-bold text-lg sm:text-xl group-hover:text-yellow-300 transition-colors duration-300">
                    {show.city}
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2 text-white/90 text-xs sm:text-sm">
                  <div className="flex items-center gap-1 sm:gap-2 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="truncate">{show.venue}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 group-hover:text-white transition-colors duration-300">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span>{show.time} hrs</span>
                  </div>
                </div>

                {show.links && show.links.length > 0 ? (
                  <div className="space-y-2 mt-3 sm:mt-4">
                    {show.links.map((link, index) => (
                      <Button
                        key={index}
                        className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm py-2 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 hover:-translate-y-0.5 border-2 border-red-400/30 hover:border-red-300/60"
                        onClick={() => window.open(link.url, "_blank")}
                      >
                        {link.label}
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-12 transition-transform" />
                      </Button>
                    ))}
                    {show.details && (
                      <Button
                        variant="outline"
                        className="w-full border-2 border-white/60 text-white hover:bg-white hover:text-red-700 font-bold text-xs sm:text-sm py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/30 hover:-translate-y-0.5 backdrop-blur-sm"
                        onClick={() => window.open(show.details, "_blank")}
                      >
                        Más detalles
                      </Button>
                    )}
                  </div>
                ) : (
                  <Button
                    className="w-full mt-3 sm:mt-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm py-2 shadow-lg hover:shadow-xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    disabled={show.status === "coming_soon"}
                  >
                    {showData.ui.cta[show.status as keyof typeof showData.ui.cta]}
                  </Button>
                )}
              </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-6 sm:mt-8 mb-20">
          <div className="text-white/80 text-xs sm:text-sm">
            Más información en <span className="font-bold">musicvibe.mx</span>
          </div>
        </div>
      </div>

      {/* Bottom Sheet Dialog */}
      {isSearchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
            onClick={() => {
              setIsSearchOpen(false)
              setSearchQuery("")
            }}
          />

          {/* Bottom Sheet */}
          <div className="fixed inset-x-0 bottom-0 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-t-3xl shadow-2xl max-h-[80vh] overflow-hidden">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 border-b-4 border-blue-400/30">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-xl sm:text-2xl font-black">BUSCAR CIUDAD</h2>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery("")
                    }}
                    className="text-white/80 hover:text-white transition-all duration-300 hover:rotate-90 hover:scale-125"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Search Input */}
              <div className="px-6 py-4 bg-red-700/50">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input
                    type="text"
                    placeholder="Escribe el nombre de tu ciudad..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setSelectedCity(null)
                    }}
                    autoFocus
                    className="w-full pl-12 pr-4 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-xl text-white placeholder:text-white/60 focus:bg-white/30 focus:border-white/80 focus:ring-4 focus:ring-white/20 transition-all duration-300 font-semibold"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-90"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Cities List */}
              <div className="overflow-y-auto max-h-[50vh] px-4 pb-6">
                {searchQuery === "" ? (
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm font-bold px-2 py-2">TODAS LAS CIUDADES</p>
                    {uniqueCities.map((city) => {
                      const eventsInCity = showData.dates.filter((show) => show.city === city).length
                      return (
                        <button
                          key={city}
                          onClick={() => {
                            setSearchQuery(city)
                            setIsSearchOpen(false)
                          }}
                          className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold text-base">{city}</span>
                            <span className="text-yellow-300 text-sm font-bold">
                              {eventsInCity} {eventsInCity === 1 ? "evento" : "eventos"}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                ) : filteredDates.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm font-bold px-2 py-2">
                      {filteredDates.length} {filteredDates.length === 1 ? "RESULTADO" : "RESULTADOS"}
                    </p>
                    {Array.from(new Set(filteredDates.map((show) => show.city))).map((city) => {
                      const eventsInCity = filteredDates.filter((show) => show.city === city).length
                      return (
                        <button
                          key={city}
                          onClick={() => {
                            setSearchQuery(city)
                            setIsSearchOpen(false)
                          }}
                          className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400/40 hover:border-yellow-300/60 hover:shadow-lg hover:shadow-yellow-400/20 animate-in fade-in slide-in-from-bottom-2 duration-300"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white font-bold text-base">{city}</span>
                            <span className="text-yellow-300 text-sm font-bold">
                              {eventsInCity} {eventsInCity === 1 ? "evento" : "eventos"}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 mx-auto text-white/30 mb-4" />
                    <p className="text-white/80 font-bold text-lg">No se encontró "{searchQuery}"</p>
                    <p className="text-white/60 text-sm mt-2">Intenta con otra ciudad</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
