import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SwissInfo() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="swiss-grid">
        <div className="col-span-5 flex flex-col justify-center">
          <p className="text-2xl leading-relaxed text-gray-600">
            Generika tragen nach Patentablauf eines Arzneimittels zu einer kostengünstigen und dabei qualitativ
            hochwertigen medizinischen Versorgung der Bevölkerung bei. In Deutschland werden derzeit rund 80 % des
            gesamten Arzneimittelbedarfs durch Generikaunternehmen gedeckt.
          </p>
          <Button variant="link" className="mt-8 w-fit p-0 text-lg uppercase tracking-wide hover:no-underline">
            Mehr erfahren →
          </Button>
        </div>
        <div className="col-span-6 col-start-7">
          <Image
            src="https://betapharm.de/fileadmin/_processed_/b/5/csm_639800036_290869a26a.jpg"
            alt="Family outdoors"
            width={800}
            height={600}
            className="h-[600px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

