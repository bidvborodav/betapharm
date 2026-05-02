import { Card, CardContent } from "@/components/ui/card"

export function VisionMission() {
  return (
    <section className="py-12 md:py-16 lg:py-24 lg:mt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Unsere Vision & Mission
          </h2>
          <p className="mt-4 text-lg text-gray-600 md:mt-6 md:text-xl">
            Qualitativ hochwertige Arzneimittel zu bezahlbaren Preisen
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:mt-16 lg:mt-20 lg:grid-cols-2">
          <Card className="bg-white">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-blue-600 md:text-2xl">
                Unsere Vision
              </h3>
              <p className="mt-4 text-gray-600">
                Als führender Generikahersteller in Deutschland streben wir danach, qualitativ hochwertige 
                und bezahlbare Arzneimittel für alle zugänglich zu machen. Mit unserem umfangreichen 
                Sortiment von 120 Wirkstoffen in über 900 Handelsformen setzen wir Maßstäbe in der 
                medizinischen Versorgung.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-blue-600 md:text-2xl">
                Unsere Mission
              </h3>
              <p className="mt-4 text-gray-600">
                Wir fördern aktiv die ganzheitliche Krankheitsbewältigung durch innovative soziale 
                Projekte im Gesundheitswesen. Durch das beta Institut unterstützen wir Patienten, 
                Fachleute und Interessierte mit wichtigen Informationen zu Gesundheitsthemen und 
                sozialrechtlichen Fragestellungen.
              </p>
            </CardContent>
          </Card>

          <div className="lg:col-span-2">
            <Card className="bg-gray-50">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-blue-600 md:text-2xl">
                  Unser Erbe
                </h3>
                <p className="mt-4 text-gray-600">
                  Seit unserer Gründung 1993 in Augsburg haben wir uns zu einem der führenden 
                  Generikahersteller in Deutschland entwickelt. Seit 2006 sind wir Teil des 
                  internationalen Pharmakonzerns Dr. Reddy's Laboratories und setzen unsere 
                  Tradition der Innovation und des sozialen Engagements fort.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission