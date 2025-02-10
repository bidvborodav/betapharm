import { Phone, Mail, Printer } from "lucide-react"

export function SwissContact() {
  return (
    <section className="py-24">
      <div className="swiss-grid">
        <div className="col-span-12">
          <h2 className="mb-16 text-center text-4xl font-bold">Ihr Kontakt zu uns</h2>
        </div>

        <div className="col-span-4">
          <Phone className="h-10 w-10 text-blue-600" />
          <h3 className="mt-6 text-xl font-medium">Telefon</h3>
          <a href="tel:+49082174881-0" className="mt-2 block text-lg text-blue-600 hover:text-blue-500">
            +49 (0)821 74881-0
          </a>
        </div>

        <div className="col-span-4">
          <Mail className="h-10 w-10 text-blue-600" />
          <h3 className="mt-6 text-xl font-medium">Mail</h3>
          <a href="mailto:info@betapharm.de" className="mt-2 block text-lg text-blue-600 hover:text-blue-500">
            info@betapharm.de
          </a>
        </div>

        <div className="col-span-4">
          <Printer className="h-10 w-10 text-blue-600" />
          <h3 className="mt-6 text-xl font-medium">Fax</h3>
          <p className="mt-2 text-lg text-blue-600">+49 (0)800 74881-20</p>
        </div>
      </div>
    </section>
  )
}

