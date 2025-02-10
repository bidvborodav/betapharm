import { FlaskRoundIcon as Flask, FileText, Pill } from "lucide-react"
import Link from "next/link"

export function CompanyInfo() {
  const info = [
    {
      icon: <Flask className="h-12 w-12 text-blue-600" />,
      title: "150 Wirkstoffe in über 900 Darreichungsformen",
      link: "Zur Arzneimittelsuche",
      href: "/arzneimittelsuche",
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Informationsmaterialien",
      link: "Zum Informationsmaterial",
      href: "/informationsmaterial",
    },
    {
      icon: <Pill className="h-12 w-12 text-blue-600" />,
      title: "Was sind Generika?",
      link: "Zu unseren Produkten",
      href: "/produkte",
    },
  ]

  return (
    <section className="bg-blue-900 py-16 text-white">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {info.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
              <Link href={item.href} className="mt-2 text-blue-200 hover:text-blue-100">
                {item.link}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

