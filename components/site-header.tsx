import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="w-full bg-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-10%20at%2011.06.11@2x-8xz8PHwr9Iauz6o5UpwWMudTCP0UJW.png"
            alt="betapharm Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/uber-uns" className="text-sm font-medium">
            Über uns
          </Link>
          <Link href="/karriere" className="text-sm font-medium">
            Karriere
          </Link>
          <Link href="/produkte" className="text-sm font-medium">
            Produkte
          </Link>
          <Link href="/service" className="text-sm font-medium">
            Service
          </Link>
          <div className="flex items-center space-x-2">
            <Input type="search" placeholder="Suche" className="w-[200px]" />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

