import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container">
        <h2 className="mb-4 text-2xl font-bold">Informationen zu unserem Arzneisortiment</h2>
        <p className="mb-6 text-gray-600">
          Hier stellen wir Ihnen die Beipackzettel unserer Arzneimittel zur Verfügung.
        </p>
        <div className="relative max-w-2xl">
          <Input type="search" placeholder="Name des Arzneimittels eingeben" className="pr-10" />
          <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </section>
  )
}

