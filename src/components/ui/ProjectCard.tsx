"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export function ProjectCard({ id, title, category, imageUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-neutral-100 aspect-[4/5]"
    >
      <Link href={`/projects/${id}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-white text-xs uppercase tracking-widest mb-1">{category}</p>
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
