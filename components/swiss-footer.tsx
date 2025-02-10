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
      <div className="swiss-grid py-24">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="col-span-3">
            <h4 className="text-lg font-medium uppercase tracking-wide">{category}</h4>
            <ul className="mt-8 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-12 mt-24 border-t pt-12">
          <div className="swiss-grid-8">
            <div className="col-span-4">
              <p className="text-sm text-gray-600">betapharm Arzneimittel GmbH</p>
              <p className="mt-2 text-sm text-gray-600">
                Seit 2006 gehört betapharm zum internationalen Pharmakozern Dr. Reddy's Laboratories.
              </p>
            </div>

            <div className="col-span-4 flex justify-end gap-8">
              <Link href="/impressum" className="text-sm text-gray-600 hover:text-gray-900">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-sm text-gray-600 hover:text-gray-900">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-sm text-gray-600 hover:text-gray-900">
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

