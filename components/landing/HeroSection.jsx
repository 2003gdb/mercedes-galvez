import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <Image
        src="/logo-hero.PNG"
        alt="Mercedes Logo"
        width={1200}
        height={1200}
        className="w-[150vw] sm:w-[80vw] max-w-none sm:max-w-[600px] object-contain z-10"
        priority
      />
      <Card className="w-full max-w-md mx-4 bg-white/10 backdrop-blur-xs border-none absolute top-1/2 transform -translate-y-1/2 z-20 p-3 md:p-5">
        <CardContent className="flex flex-col items-center p-4 px-2">
          <h1 className="text-3xl tracking-tight" style={{ fontFamily: 'var(--font-lexend-mega)' }} >Terapia Electromagnética</h1>
          <p className="text-xl text-gray-700 pt-2 font-lexend-mega">
            Mercedes Galvez Diaz Barriga
          </p>
          <p className="text-md text-gray-700 font-lexend-mega">
            +52 (443) 1858 551
          </p>
        </CardContent>
      </Card>
    </div>
  );
}