import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <AnimatedSection>
            <h1 className="text-xs uppercase tracking-[0.4em] text-neutral-400 mb-4">Portfolio</h1>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Our Work</h2>
            <p className="mt-8 text-neutral-500 text-xl max-w-xl font-light">
              A curation of our most significant projects, ranging from residential havens to urban landmarks.
            </p>
          </AnimatedSection>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
