import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Architectural Feature"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="relative z-10 text-center px-6">
          <AnimatedSection>
            <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6">
              Architecture <br /> for the Future
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              We design spaces that inspire, endure, and harmonize with the environment.
              Besfact Architecture is an award-winning practice dedicated to minimalism and innovation.
            </p>
            <Link 
              href="/projects" 
              className="inline-flex items-center space-x-2 bg-white text-black px-8 py-4 uppercase text-sm tracking-widest font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <p className="text-[10px] uppercase tracking-[0.3em]">Scroll</p>
        </div>
      </section>

      {/* Philosophy Preview */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Simplicity is the ultimate sophistication.
            </h3>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              Founded in 2015, Besfact Architecture has been at the forefront of contemporary architecture.
              Our approach is rooted in the belief that great design is a balance of form, function, and emotion.
              We strip away the unnecessary to reveal the essence of a space.
            </p>
            <Link href="/about" className="text-sm uppercase tracking-widest font-bold border-b-2 border-black pb-1 hover:opacity-50 transition-opacity">
              Learn more about us
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-square bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Studio"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-neutral-50 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">Selected Works</h2>
              <h3 className="text-4xl font-bold tracking-tight">Featured Projects</h3>
            </div>
            <Link href="/projects" className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest font-bold hover:opacity-50">
              <span>All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Link href="/projects" className="flex items-center justify-center space-x-2 text-sm uppercase tracking-widest font-bold border py-4">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Have a vision for a project?
          </h2>
          <p className="text-neutral-500 text-xl mb-12 max-w-2xl mx-auto font-light">
            Let&apos;s collaborate to build something exceptional. Our team is ready to transform your ideas into reality.
          </p>
          <Link 
            href="/contact" 
            className="bg-black text-white px-12 py-5 uppercase text-sm tracking-widest font-semibold hover:bg-neutral-800 transition-colors"
          >
            Get in touch
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
