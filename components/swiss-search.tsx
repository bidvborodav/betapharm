import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SwissSearch() {
  return (
    <section className="py-24">
      <div className="swiss-grid">
        <div className="col-span-12 flex flex-col items-center">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">Informationen zu unserem Arzneisortiment</h2>
          <p className="mb-12 text-xl text-gray-600">
            Hier stellen wir Ihnen die Beipackzettel unserer Arzneimittel zur Verfügung.
          </p>
          <div className="relative max-w-2xl w-full">
            <Input
              type="search"
              placeholder="Name des Arzneimittels eingeben"
              className="h-16 border-0 pl-0 pr-12 text-lg w-full"
            />
            <Search className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}

