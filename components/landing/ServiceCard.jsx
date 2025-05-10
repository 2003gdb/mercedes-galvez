"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ServiceCard({ title, imageSrc, description, services, cuarzoSrc }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile (doesn't support hover)
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(hover: none)');
      setIsMobile(mediaQuery.matches);
      
      // Add listener for changes (e.g. device orientation changes)
      const handleMediaChange = (e) => setIsMobile(e.matches);
      mediaQuery.addEventListener('change', handleMediaChange);
      
      return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, []);

  // Handle click for mobile devices
  const handleCardClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="min-h-[300px] md:h-[300px] perspective-1000 relative">
      {/* Cuarzo image on top of card */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-16 md:h-24 z-10">
        <Image
          src={cuarzoSrc || "/cuarzo-rosa.PNG"}
          alt="Cuarzo"
          width={124}
          height={124}
          className="object-contain"
        />
      </div>
      
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''} hover:rotate-y-180`}
        onClick={handleCardClick}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden bg-white/20 backdrop-blur-sm pt-6">
          {/* Content */}
          <div className="p-4 mt-4 flex flex-col h-full">
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-sm text-gray/70">{description}</p>
            <div className="mt-auto">
              <p className="text-xs text-center text-muted-foreground md:hidden pt-2 border-t">
                Toca para ver detalles
              </p>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden overflow-y-auto rotate-y-180 bg-white/20 backdrop-blur-sm p-3 md:p-5 shadow-lg">
          <div className="p-2 flex flex-col h-full">
            <h4 className="font-medium text-lg mb-2 border-b pb-2">{title}</h4>
            <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 text-sm flex-grow">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}