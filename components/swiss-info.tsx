import { Button } from "@/components/ui/button"
import Image from "next/image"

export function SwissInfo() {
  return (
    <section className="bg-gray-100 py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 lg:mb-16 lg:text-4xl">
          Qualität und Kostenbewusstsein
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl lg:text-2xl">
              Generika tragen nach Patentablauf eines Arzneimittels zu einer kostengünstigen und dabei qualitativ
              hochwertigen medizinischen Versorgung der Bevölkerung bei. In Deutschland werden derzeit rund 80 % des
              gesamten Arzneimittelbedarfs durch Generikaunternehmen gedeckt.
            </p>
            <Button 
              variant="link" 
              className="mt-6 w-fit p-0 text-base font-medium uppercase tracking-wide hover:no-underline md:mt-8 md:text-lg"
            >
              Mehr erfahren →
            </Button>
          </div>

          <div className="h-64 md:h-96 lg:h-[600px]">
            <Image
              src="https://betapharm.de/fileadmin/_processed_/b/5/csm_639800036_290869a26a.jpg"
              alt="Family outdoors"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SwissInfo