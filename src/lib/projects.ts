export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  imageUrl: string;
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "brutalist-concrete-residence",
    title: "Brutalist Concrete Residence",
    category: "Residential",
    year: "2023",
    location: "Zurich, Switzerland",
    description: "A monolithic concrete structure that plays with light and shadow, seamlessly integrating with the rugged alpine landscape.",
    imageUrl: "https://images.unsplash.com/photo-1518005020250-6859b2827c17?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1518005020250-6859b2827c17?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "minimalist-glass-pavilion",
    title: "Minimalist Glass Pavilion",
    category: "Cultural",
    year: "2022",
    location: "Kyoto, Japan",
    description: "An ethereal structure that blurs the boundaries between interior space and the surrounding zen garden.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1449156001935-d28bc3df726f?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "urban-sustainable-hub",
    title: "Urban Sustainable Hub",
    category: "Commercial",
    year: "2024",
    location: "Copenhagen, Denmark",
    description: "A mixed-use development focused on carbon neutrality, featuring vertical forests and recycled materials.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "the-monolith-office",
    title: "The Monolith Office",
    category: "Commercial",
    year: "2021",
    location: "Berlin, Germany",
    description: "A bold statement in the urban landscape, utilizing dark steel and geometric precision.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "geometric-residence",
    title: "Geometric Residence",
    category: "Residential",
    year: "2021",
    location: "Zurich, Switzerland",
    description: "A striking residential design featuring bold geometric forms and sharp angles.",
    imageUrl: "/projects/photo_2026-06-02_17-38-44.jpg",
    gallery: ["/projects/photo_2026-06-02_17-38-44.jpg"]
  },
  {
    id: "modern-commercial-center",
    title: "Modern Commercial Center",
    category: "Commercial",
    year: "2022",
    location: "Berlin, Germany",
    description: "A contemporary commercial hub designed for productivity and aesthetic appeal.",
    imageUrl: "/projects/photo_2026-06-02_17-38-52.jpg",
    gallery: ["/projects/photo_2026-06-02_17-38-52.jpg"]
  },
  {
    id: "cultural-pavilion",
    title: "Cultural Pavilion",
    category: "Cultural",
    year: "2023",
    location: "Copenhagen, Denmark",
    description: "A space dedicated to art and culture, blending seamlessly with its environment.",
    imageUrl: "/projects/photo_2026-06-02_17-39-17.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-17.jpg"]
  },
  {
    id: "urban-sustainable-plaza",
    title: "Urban Sustainable Plaza",
    category: "Urban Design",
    year: "2024",
    location: "Kyoto, Japan",
    description: "A sustainable urban space designed to foster community and environmental health.",
    imageUrl: "/projects/photo_2026-06-02_17-39-25.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-25.jpg"]
  },
  {
    id: "alpine-villa",
    title: "Alpine Villa",
    category: "Residential",
    year: "2021",
    location: "Oslo, Norway",
    description: "A luxury villa offering breathtaking views and modern comfort in an alpine setting.",
    imageUrl: "/projects/photo_2026-06-02_17-39-33.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-33.jpg"]
  },
  {
    id: "innovation-lab",
    title: "Innovation Lab",
    category: "Commercial",
    year: "2022",
    location: "Zurich, Switzerland",
    description: "A state-of-the-art laboratory designed for cutting-edge research and innovation.",
    imageUrl: "/projects/photo_2026-06-02_17-39-39.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-39.jpg"]
  },
  {
    id: "heritage-museum",
    title: "Heritage Museum",
    category: "Cultural",
    year: "2023",
    location: "Berlin, Germany",
    description: "A museum that honors local heritage while embracing contemporary architectural styles.",
    imageUrl: "/projects/photo_2026-06-02_17-39-47.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-47.jpg"]
  },
  {
    id: "green-city-initiative",
    title: "Green City Initiative",
    category: "Urban Design",
    year: "2024",
    location: "Copenhagen, Denmark",
    description: "An ambitious urban design project aimed at making the city greener and more livable.",
    imageUrl: "/projects/photo_2026-06-02_17-39-53.jpg",
    gallery: ["/projects/photo_2026-06-02_17-39-53.jpg"]
  },
  {
    id: "zen-garden-house",
    title: "Zen Garden House",
    category: "Residential",
    year: "2021",
    location: "Kyoto, Japan",
    description: "A peaceful residence designed around a traditional Zen garden, promoting tranquility.",
    imageUrl: "/projects/photo_2026-06-02_17-40-01.jpg",
    gallery: ["/projects/photo_2026-06-02_17-40-01.jpg"]
  }
];
