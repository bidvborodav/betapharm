import { Phone, Mail, Printer } from "lucide-react"

export function SwissContact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+49 (0)821 74881-0",
      href: "tel:+49082174881-0",
      isLink: true
    },
    {
      icon: Mail,
      title: "Mail",
      content: "info@betapharm.de",
      href: "mailto:info@betapharm.de",
      isLink: true
    },
    {
      icon: Printer,
      title: "Fax",
      content: "+49 (0)800 74881-20",
      isLink: false
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 lg:mb-16 lg:text-4xl">
          Ihr Kontakt zu uns
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <item.icon className="h-8 w-8 text-blue-600 md:h-10 md:w-10" />
              <h3 className="mt-4 text-lg font-medium md:mt-6 md:text-xl">
                {item.title}
              </h3>
              {item.isLink ? (
                <a 
                  href={item.href}
                  className="mt-2 block text-base text-blue-600 hover:text-blue-500 transition-colors md:text-lg"
                >
                  {item.content}
                </a>
              ) : (
                <p className="mt-2 text-base text-blue-600 md:text-lg">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SwissContact