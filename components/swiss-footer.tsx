import Link from "next/link"

export function SwissFooter() {
  const footerLinks = {
    "Über uns": [
      { label: "Unternehmensprofil", href: "/uber-uns/unternehmensprofil" },
      { label: "Daten & Fakten", href: "/uber-uns/daten-fakten" },
      { label: "Unser Engagement", href: "/uber-uns/engagement" },
      { label: "CSR", href: "/uber-uns/csr" },
      { label: "Transparenz", href: "/uber-uns/transparenz" },
    ],
    Karriere: [
      { label: "betapharm als Arbeitgeber", href: "/karriere/arbeitgeber" },
      { label: "Unsere Fachabteilungen", href: "/karriere/fachabteilungen" },
      { label: "Stellenangebote", href: "/karriere/stellen" },
    ],
    Produkte: [
      { label: "Was sind Generika", href: "/produkte/generika" },
      { label: "Unser Produktsortiment", href: "/produkte/sortiment" },
      { label: "Arzneimittelsuche", href: "/produkte/suche" },
      { label: "Nebenwirkungen", href: "/produkte/nebenwirkungen" },
    ],
    Service: [
      { label: "Login für Fachkreise", href: "/service/login" },
      { label: "Service für Apotheken", href: "/service/apotheken" },
      { label: "Schulungsmaterial", href: "/service/schulung" },
      { label: "betaCare", href: "/service/betacare" },
    ],
  }

  return (
    <footer className="border-t bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-medium uppercase tracking-wide">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
            <div className="max-w-md">
              <p className="text-sm text-gray-600">
                betapharm Arzneimittel GmbH
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Seit 2006 gehört betapharm zum internationalen Pharmakozern Dr. Reddy's Laboratories.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/impressum"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SwissFooter