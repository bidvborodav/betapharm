import AdaptiveHeader from "@/components/swiss-header-adaptive"
import { SwissContact } from "@/components/swiss-contact"
import { SwissFooter } from "@/components/swiss-footer"
import VisionMissionHero from "@/components/uber-uns/hero"
import VisionMission from "@/components/uber-uns/vision-mission"

export default function Unternehmensprofil() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-center">
        <AdaptiveHeader />
      </div>
      <main>
        <VisionMissionHero />
        <VisionMission />
        <SwissContact />
      </main>
      <SwissFooter />
    </div>
  )
}
