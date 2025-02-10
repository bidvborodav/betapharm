import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import AppleSearch from "./ui/search"

export function SwissSearch() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="grid">
        <div className="col-span-8 flex flex-col items-center">
          <div className="border-2 border-black rounded-xl p-6 m-4 max-w-[640px]">
          <h2 className="mb-8 text-4xl font-bold tracking-tight">Informationen zu unserem Arzneisortiment</h2>
          <p className="mb-12 text-xl text-gray-600">
            Hier stellen wir Ihnen die Beipackzettel unserer Arzneimittel zur Verfügung.
          </p>
          <div className="relative max-w-2xl w-full">
            <AppleSearch size="L"/>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

