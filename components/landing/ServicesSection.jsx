import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Sesiones",
      cuarzoSrc: "/cuarzo-rosa.PNG",
      description: "Activación de 12 plantillas base a través del Balancing Akryonita",
      services: [
        "Sanación biológica-cuántica",
        "Reconfiguración de estructuras electromagnéticas",
        "Aceleración de procesos y saltos cuánticos",
        "Reconexión de energía masculina y femenina",
        "Accede a tu potencial más alto",
        "Y más..."
      ]
    },
    {
      title: "Rejillas y Velas",
      cuarzoSrc: "/cuarzo-azul.PNG",
      description: "Activación de rejilla personalizada para cumplir los propósitos de tu alma",
      services: [
        "Materializar abundancia, salud, libertad, amor, prosperidad, etc",
        "Liberar bloqueos",
        "Sostenimiento en momentos de reto para vivirlos en suavidad",
        "Equilibrar tus relaciones",
        "Y más..."
      ]
    },
    {
      title: "Arte Canalizado",
      cuarzoSrc: "/cuarzo-amarillo.PNG",
      description: "Plasma tu energía en un dibujo personalizado",
      services: [
        "Personaliza tu dibujo",
        "Genera una representación de tu totalidad",
        "Conecta de manera visual con tu ser etéreo"
      ]
    }
  ];

  return (
    <div className="z-10 w-full flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              imageSrc={service.imageSrc}
              cuarzoSrc={service.cuarzoSrc}
              description={service.description}
              services={service.services}
            />
          ))}
        </div>
      </div>
    </div>
  );
}