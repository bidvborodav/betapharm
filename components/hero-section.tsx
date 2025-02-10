import { Button } from "@/components/ui/button"
import React from "react";

export function HeroSection() {
  return (
    <section className="relative h-[500px] bg-blue-900 overflow-hidden">
      <div className="container relative z-10 flex h-full flex-col justify-center space-y-4 text-white">
        <h1 className="max-w-2xl text-4xl font-bold">betaCare. Unser Beitrag zur betapharm</h1>
        <Button variant="secondary" className="w-fit">
          Erfahren Sie mehr
        </Button>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CleanShot%202025-02-10%20at%2011.06.11@2x-8xz8PHwr9Iauz6o5UpwWMudTCP0UJW.png)`,
          opacity: 0.5,
        }}
      />
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="wave"
          style={{ fill: "#193f84", animation: "wave-animation 5s linear infinite" }}
        >
          <path d="M0,50 C300,100 600,0 900,50 C1200,100 1500,0 1800,50 L1800,100 L0,100 Z" />
        </svg>
      </div>
      <style jsx>{`
        @keyframes wave-animation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  )
}

