import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft, MapPin, Calendar, Tag } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link 
          href="/projects" 
          className="inline-flex items-center space-x-2 text-sm uppercase tracking-widest font-bold mb-12 hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={16} />
          <span>Back to Projects</span>
        </Link>

        <header className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">{project.title}</h1>
            <p className="text-xl text-neutral-600 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col space-y-8 pt-4">
            <div className="flex items-start space-x-4">
              <MapPin className="text-neutral-400 mt-1" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Location</p>
                <p className="text-sm">{project.location}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="text-neutral-400 mt-1" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Year</p>
                <p className="text-sm">{project.year}</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Tag className="text-neutral-400 mt-1" size={20} />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Category</p>
                <p className="text-sm">{project.category}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={image}
                  alt={`${project.title} detail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
