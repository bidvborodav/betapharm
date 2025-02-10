import React from 'react';
import { Button } from "@/components/ui/button";

const Wave2Background = () => {
  // Generate paths for top and bottom waves with offset
  const generateWavePaths = (offset = 0) => {
    const topWave = `M0,40 C200,0 300,80 500,40 C700,0 800,80 1000,40`;
    const bottomWave = `M0,140 C200,100 300,180 500,140 C700,100 800,180 1000,140 L1000,200 L0,200 Z`;
    return { topWave, bottomWave };
  };

  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 200">
      Top wave - no fill, just stroke
      <path 
        id="topWavePath" 
        d={generateWavePaths().topWave} 
        fill="none" 
        stroke="#FFE500"
        strokeWidth="2"
      >
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          values={`
            ${generateWavePaths().topWave};
            M0,40 C200,80 300,0 500,40 C700,80 800,0 1000,40;
            ${generateWavePaths().topWave}
          `}
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
        />
      </path>

      {/* Bottom wave - with fill */}
      <path 
        id="bottomWavePath" 
        d={generateWavePaths().bottomWave} 
        fill="#FFE500" 
        fillOpacity="0.8"
        stroke="#FFE500"
        strokeWidth="0.01"
      >
        <animate
          attributeName="d"
          dur="20s"
          repeatCount="indefinite"
          values={`
            ${generateWavePaths().bottomWave};
            M0,140 C200,180 300,100 500,140 C700,180 800,100 1000,140 L1000,200 L0,200 Z;
            ${generateWavePaths().bottomWave}
          `}
          calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
        />
      </path>
    </svg>
  );
};

export function SwissHero() {
  return (
    <section className="relative mt-24 h-[90vh] bg-white overflow-hidden">
      <Wave2Background />
      <div className="swiss-grid h-full relative z-10">
        <div className="col-span-6 flex flex-col justify-center gap-8">
          <h1 className="text-7xl font-bold leading-none tracking-tight">
            betaCare.
            <span className="block text-blue-600">Unser Beitrag zur betapharm</span>
          </h1>
          <Button 
            variant="link" 
            className="w-fit p-0 text-lg uppercase tracking-wide hover:no-underline"
          >
            Erfahren Sie mehr →
          </Button>
        </div>

        <div
          className="col-span-6 col-start-7"
          style={{
            backgroundImage: `url(https://www.betacare.de/assets/images/4/Element%202ADHS-8fcacebc.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </section>
  );
}

export default SwissHero;