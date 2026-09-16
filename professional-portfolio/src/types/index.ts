import { IconType } from "react-icons";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  mastery: number;
  categories: ("frontend" | "backend" | "cloud")[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  icon: string;
  color: "brand" | "purple" | "green";
  points: string[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  category: "fullstack" | "ai" | "mobile";
  previewTitle: string;
  previewSubtitle: string;
  previewStats: { left: string; right: string };
  description: string;
  longDescription: string;
  tech: string[];
  gradient: string;
  borderColor: string;
  accentColor: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  gradient: string;
}