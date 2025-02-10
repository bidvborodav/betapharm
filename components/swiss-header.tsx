import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import AppleSearch from "@/components/ui/search"

export function SwissHeader() {
  return (
    <header className="fixed top-2 rounded-full z-50 w-5/6 bg-blue/80 backdrop-blur-sm shadow-md shadow-blue-100/10 place-items-center">
      <div className="swiss-grid h-12 m-4">
        <div className="col-span-2 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="https://betapharm.de/typo3conf/ext/twtdh_layoutpackage/Resources/Public/Images/Layout/betapharm-logo.png"
              alt="betapharm Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        <nav className="col-span-10 col-start-4 flex items-center justify-end gap-12">
          <Link href="/uber-uns" className="text-sm uppercase tracking-wide">
            Über uns
          </Link>
          <Link href="/karriere" className="text-sm uppercase tracking-wide">
            Karriere
          </Link>
          <Link href="/produkte" className="text-sm uppercase tracking-wide">
            Produkte
          </Link>
          <Link href="/service" className="text-sm uppercase tracking-wide">
            Service
          </Link>
          <div className="col-span-4 flex items-center justify-end">
            <AppleSearch/>
          </div>
        </nav>  
      </div>
    </header>
  )
}

