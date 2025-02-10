import { Heart, Users, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceSection() {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "Service für Patienten",
      description: "Ein Beipackzettel nicht zur Hand? Hier finden Sie alle Informationen zu unseren Produkten.",
      href: "/service/patienten",
    },
    {
      icon: <Activity className="h-10 w-10 text-blue-600" />,
      title: "Service für Fachkreise",
      description: "Informationen zu verschreibungspflichtigen Medikamenten für Ärzte und Apotheker.",
      href: "/service/fachkreise",
    },
    {
      icon: <Heart className="h-10 w-10 text-blue-600" />,
      title: "betaCare",
      description: "Mehr als Medikamente - Unser Beitrag zu einer ganzheitlichen Gesundheitsversorgung.",
      href: "/betacare",
    },
  ]

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Button variant="secondary" className="mt-4" asChild>
                <Link href={service.href}>Mehr erfahren</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

