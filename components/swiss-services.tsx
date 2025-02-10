import { Heart, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SwissServices() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Service für Patienten",
      description: "Ein Beipackzettel nicht zur Hand? Hier finden Sie alle Informationen zu unseren Produkten.",
      href: "/service/patienten",
    },
    {
      icon: <Activity className="h-12 w-12 text-blue-600" />,
      title: "Service für Fachkreise",
      description: "Informationen zu verschreibungspflichtigen Medikamenten für Ärzte und Apotheker.",
      href: "/service/fachkreise",
    },
    {
      icon: <Heart className="h-12 w-12 text-blue-600" />,
      title: "betaCare",
      description: "Mehr als Medikamente - Unser Beitrag zu einer ganzheitlichen Gesundheitsversorgung.",
      href: "/betacare",
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="swiss-grid">
        {services.map((service, index) => (
          <div key={index} className="col-span-4">
            {service.icon}
            <h3 className="mt-8 text-2xl font-bold">{service.title}</h3>
            <p className="mt-4 text-lg text-gray-600">{service.description}</p>
            <Button variant="link" className="mt-6 p-0 text-blue-600 hover:no-underline" asChild>
              <Link href={service.href}>Mehr erfahren →</Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}

