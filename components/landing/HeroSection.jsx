import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="w-full max-w-2xl md:max-w-2xl lg:max-w-3xl relative aspect-square">
        <Image
          src="/logo-hero.PNG"
          alt="Mercedes Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <Card className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-xs border-none absolute top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-5">
        <CardContent className="flex flex-col items-center p-4 px-2">
          <h1 className="text-3xl tracking-tight">Terapia Electromagnética</h1>
          <p className="text-xl text-gray-700 pt-2">
            Mercedes Galvez Diaz Barriga
          </p>
          <p className="text-md text-gray-700">
            +52 (443) 1858 551
          </p>
        </CardContent>
      </Card>
    </div>
  );
}