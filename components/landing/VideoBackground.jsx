import Image from "next/image";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0">
        <Image 
          src="/bg.png" 
          alt="Background" 
          fill 
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </div>
  );
}