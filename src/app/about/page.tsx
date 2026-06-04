import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20">
          <h1 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">Philosophy</h1>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">About the Studio</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <p className="text-2xl font-light leading-relaxed">
              Besfact Architecture is an architectural practice based in Zurich, focused on creating spaces that are both meaningful and timeless.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Founded in 2015 by Marcus Vane, our studio has grown into a collaborative environment where architects, designers, and thinkers come together to solve complex spatial challenges. We believe that architecture should be an extension of its environment, not a disruption.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              Our methodology is characterized by a deep respect for materials, a obsession with natural light, and a commitment to sustainability. We don&apos;t just build structures; we create experiences that resonate with the people who inhabit them.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Awards</h4>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>Pritzker Nominee 2023</li>
                  <li>AIA Gold Medal 2021</li>
                  <li>Sustainable Design Award</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Capabilities</h4>
                <ul className="text-sm text-neutral-500 space-y-1">
                  <li>Residential Design</li>
                  <li>Urban Planning</li>
                  <li>Interior Architecture</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="relative aspect-[3/4] bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800"
                alt="Architect Portrait"
                fill
                className="object-cover"
              />
            </div>
            <div className="border-l-4 border-black pl-8">
              <p className="text-xl italic font-serif">
                &quot;Architecture is the learned game, correct and magnificent, of forms assembled in the light.&quot;
              </p>
              <p className="mt-4 text-sm uppercase tracking-widest font-bold">— Marcus Vane, Lead Architect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
