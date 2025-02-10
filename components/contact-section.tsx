import { Phone, Mail, Printer } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold">Ihr Kontakt zu uns</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 text-blue-600" />
            <h3 className="mt-4 font-medium">Telefon</h3>
            <a href="tel:+49082174881-0" className="mt-2 text-blue-600 hover:text-blue-500">
              +49 (0)821 74881-0
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Mail className="h-8 w-8 text-blue-600" />
            <h3 className="mt-4 font-medium">Mail</h3>
            <a href="mailto:info@betapharm.de" className="mt-2 text-blue-600 hover:text-blue-500">
              info@betapharm.de
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <Printer className="h-8 w-8 text-blue-600" />
            <h3 className="mt-4 font-medium">Fax</h3>
            <p className="mt-2 text-blue-600">+49 (0)800 74881-20</p>
          </div>
        </div>
      </div>
    </section>
  )
}

