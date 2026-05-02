export function VisionMissionHero() {
  return (
    <section className="relative mt-16 min-h-[120px] overflow-hidden bg-white md:mt-20 lg:mt-24 lg:h-[60vh]">
      <div className="absolute inset-0 z-20" />

      <div className="z-10 mx-auto h-full max-w-7xl px-4 md:px-6">
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 pt-12 md:gap-8 lg:pt-0">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-7xl">
                Unser
                <span className="block text-blue-600">Engagement</span>
              </h1>
              <p className="text-lg text-gray-600 md:text-xl lg:text-2xl">
                Seit 1993 setzen wir uns für qualitativ hochwertige und bezahlbare Arzneimittel ein.
                Unser Ziel ist es, die Gesundheitsversorgung für alle zugänglich zu machen.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default VisionMissionHero
