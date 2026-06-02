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
  }
];
