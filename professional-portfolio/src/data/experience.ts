import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    role: "Senior Lead Software Engineer",
    company: "TechCorp Global Inc.",
    location: "USA (Remote)",
    period: "2023 - Present",
    icon: "briefcase",
    color: "brand",
    points: [
      "Architected microservice event platform processing 10M+ events/day with 99.99% uptime on AWS EKS.",
      "Spearheaded front-end migration to Next.js 14, improving page load speed by 45% and boosting SEO metrics.",
      "Mentored a team of 8 full-stack engineers and established strict CI/CD, testing, and code review standards.",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: "Fintech Innovations Lanka",
    location: "Colombo, Sri Lanka",
    period: "2021 - 2023",
    icon: "code",
    color: "purple",
    points: [
      "Developed real-time payment gateway integration handling over $2M monthly volume with PCI-DSS compliance.",
      "Implemented Redis caching layer reducing database query response time from 350ms to 18ms.",
      "Built responsive React dashboard with dynamic analytics charts using Recharts & Tailwind.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "CloudLogic Solutions",
    location: "Colombo, Sri Lanka",
    period: "2019 - 2021",
    icon: "laptop",
    color: "green",
    points: [
      "Built full-stack web applications using Node.js, Express, React, and PostgreSQL.",
      "Integrated third-party REST APIs and automated unit tests achieving 85%+ code coverage.",
    ],
  },
];