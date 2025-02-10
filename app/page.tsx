import AdaptiveHeader from "@/components/swiss-header-adaptive"
import { SwissHeader } from "@/components/swiss-header"
import { SwissHero } from "@/components/swiss-hero"
import { SwissSearch } from "@/components/swiss-search"
import { SwissServices } from "@/components/swiss-services"
import { SwissInfo } from "@/components/swiss-info"
import { SwissCompany } from "@/components/swiss-company"
import { SwissContact } from "@/components/swiss-contact"
import { SwissFooter } from "@/components/swiss-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex justify-center">
        {/* <SwissHeader /> */}
        <AdaptiveHeader />
      </div>
      <main>
        <SwissHero />
        <SwissSearch />
        <SwissServices />
        <SwissInfo />
        <SwissCompany />
        <SwissContact />
      </main>
      <SwissFooter />
    </div>
  )
}

