import { Button } from "@/components/ui/button"
import Image from "next/image"

export function InfoBanner() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-600">
              Generika tragen nach Patentablauf eines Arzneimittels zu einer kostengünstigen und dabei qualitativ
              hochwertigen medizinischen Versorgung der Bevölkerung bei. In Deutschland werden derzeit rund 80 % des
              gesamten Arzneimittelbedarfs durch Generikaunternehmen gedeckt.
            </p>
            <Button variant="secondary" className="w-fit">
              Mehr erfahren
            </Button>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-10%20at%2011.06.11@2x-8xz8PHwr9Iauz6o5UpwWMudTCP0UJW.png"
              alt="Family outdoors"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

