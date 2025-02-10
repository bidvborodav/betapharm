import { FlaskRoundIcon as Flask, FileText, Pill } from "lucide-react"
import Link from "next/link"

export function SwissCompany() {
  const info = [
    {
      icon: <Flask className="h-16 w-16 text-white" />,
      title: "150 Wirkstoffe in über 900 Darreichungsformen",
      link: "Zur Arzneimittelsuche",
      href: "/arzneimittelsuche",
    },
    {
      icon: <FileText className="h-16 w-16 text-white" />,
      title: "Informationsmaterialien",
      link: "Zum Informationsmaterial",
      href: "/informationsmaterial",
    },
    {
      icon: <Pill className="h-16 w-16 text-white" />,
      title: "Was sind Generika?",
      link: "Zu unseren Produkten",
      href: "/produkte",
    },
  ]

  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="swiss-grid">
        {info.map((item, index) => (
          <div key={index} className="col-span-4">
            {item.icon}
            <h3 className="mt-8 text-2xl font-medium leading-tight">{item.title}</h3>
            <Link href={item.href} className="mt-4 block text-lg text-blue-100 hover:text-white">
              {item.link} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

