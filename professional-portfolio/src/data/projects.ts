import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Management System",
    slug: "web platform",
    category: "fullstack",
    previewTitle: "Student Management System",
    previewSubtitle: "spring-boot-crud-api",
    previewStats: { left: "Architecture: Layered", right: "Stack: Spring Boot + JS" },
    description:
      "Full-stack student management system built with a layered Spring Boot backend and an HTML, CSS, and JavaScript frontend to manage students, courses, enrollments, coursework, and books.",
    longDescription:
      "Layered Spring Boot application structured with Controller, Service/ServiceImpl, Repository, Entity, and Model/DTO components alongside a JavaScript fetch-driven frontend for CRUD operations and academic records.",
    tech: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "HTML", "CSS", "JavaScript"],
    gradient: "from-sky-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 2,
    title: "MarkPro",
    slug: "markpro-attendance-payroll",
    category: "frontend",
    previewTitle: "MarkPro UI",
    previewSubtitle: "attendance-and-payroll",
    previewStats: { left: "Focus: Frontend & UI", right: "Auth & Data: Firebase" },
    description:
      "Frontend-focused enterprise attendance and payroll management interface crafted with attention to layout clarity, usability, and interactive workflows.",
    longDescription:
      "UI-driven attendance and payroll management application built with React, JavaScript, HTML, and CSS, leveraging Firebase for data and authentication alongside lightweight Node.js support, with AI assistance used during development.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Firebase", "Node.js"],
    gradient: "from-emerald-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 3,
    title: "Clothing Dark",
    slug: "clothing-dark-ecommerce",
    category: "fullstack",
    previewTitle: "Clothing Dark Store",
    previewSubtitle: "ecommerce-spring-boot",
    previewStats: { left: "Stack: Spring Boot + JS", right: "Modules: Cart & Orders" },
    description:
      "Full-stack e-commerce web application featuring a shopping cart, order management system, and customer support workflows built with Spring Boot and frontend web technologies.",
    longDescription:
      "End-to-end e-commerce web platform developed with HTML, CSS, JavaScript, and Spring Boot, covering product browsing, shopping cart state, order management, and customer support features.",
    tech: ["Java", "Spring Boot", "HTML", "CSS", "JavaScript"],
    gradient: "from-violet-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 4,
    title: "Art Library",
    slug: "art-library-management-system",
    category: "fullstack",
    previewTitle: "Art Library System",
    previewSubtitle: "javafx-hibernate-desktop",
    previewStats: { left: "Type: Standalone App", right: "ORM: Hibernate + OOP" },
    description:
      "Standalone desktop library management system built with JavaFX, Scene Builder, and Hibernate, featuring complete CRUD operations, strong OOP structure, and clean UI design.",
    longDescription:
      "Desktop library management application developed in IntelliJ IDEA using Java, JavaFX, and Scene Builder for the interface and Hibernate for persistence, covering full CRUD workflows, object-oriented design principles, and UI presentation.",
    tech: ["Java", "JavaFX", "Hibernate", "Scene Builder", "IntelliJ IDEA", "OOP"],
    gradient: "from-amber-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 5,
    title: "Digit Recognizer CNN",
    slug: "digit-recognizer-cnn",
    category: "ai",
    previewTitle: "Digit Recognizer CNN",
    previewSubtitle: "mnist-cnn-flask-js",
    previewStats: { left: "Model: MNIST CNN", right: "Stack: TF + Flask + JS" },
    description:
      "Experimental web application for real-time handwritten digit recognition where users draw on a canvas and a CNN trained on MNIST predicts digits using TensorFlow, Flask, and Vanilla JavaScript.",
    longDescription:
      "Interactive ML experiment combining a lightweight HTML, CSS, and Vanilla JavaScript canvas frontend with a Flask backend and a TensorFlow CNN model trained on MNIST to perform real-time handwritten digit predictions.",
    tech: ["Python", "TensorFlow", "CNN", "Flask", "HTML", "CSS", "JavaScript"],
    gradient: "from-cyan-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 6,
    title: "GoRide",
    slug: "goride-handling-ecosystem",
    category: "frontend",
    previewTitle: "GoRide Console",
    previewSubtitle: "ride-dispatch-ui",
    previewStats: { left: "Focus: AI-Assisted UI", right: "Stack: React + Firebase" },
    description:
      "Ride-handling UI experiment built to explore AI-assisted frontend development, covering order booking, trip tracking, driver dispatch and earnings, and an operational console for approvals, rides, analytics, and pricing.",
    longDescription:
      "Frontend-focused ride-handling ecosystem developed with HTML, CSS, JavaScript, React, Node.js, and Firebase to test AI-assisted UI design across booking, live trip tracking, driver dispatch and earnings, and operational management views.",
    tech: ["React", "JavaScript", "HTML", "CSS", "Node.js", "Firebase"],
    gradient: "from-rose-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 7,
    title: "SentimentPulse",
    slug: "sentiment-pulse-analyzer",
    category: "ai",
    previewTitle: "SentimentPulse",
    previewSubtitle: "review-sentiment-ml",
    previewStats: { left: "Task: Sentiment ML", right: "UI: HTML + CSS + JS" },
    description:
      "Web application pairing a clean HTML, CSS, and JavaScript interface with a machine learning sentiment model to classify submitted reviews and feedback—such as movie reviews—as positive or negative.",
    longDescription:
      "Full experiment combining a lightweight HTML, CSS, and JavaScript frontend with a sentiment analysis ML model where users submit feedback, comments, or movie reviews and receive real-time positive or negative sentiment predictions.",
    tech: ["Python", "Machine Learning", "NLP", "HTML", "CSS", "JavaScript"],
    gradient: "from-indigo-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 8,
    title: "Tripzy",
    slug: "tripzy-travel-companion",
    category: "mobile",
    previewTitle: "Tripzy Mobile",
    previewSubtitle: "smart-travel-companion",
    previewStats: { left: "Type: Group Mobile App", right: "Stack: RN + Expo + Supabase" },
    description:
      "Collaborative group mobile travel companion featuring a social feed, travel stories, trip planning tools, a tour guide marketplace, real-time messaging, event management, and personalized profiles with travel stats and badges.",
    longDescription:
      "Mobile travel application built collaboratively by a four-person group using React Native, Expo Go, and Supabase, combining social storytelling, trip planning, guide discovery, real-time chat, events, and achievement-driven user profiles.",
    tech: ["React Native", "Expo Go", "Supabase", "JavaScript"],
    gradient: "from-teal-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 9,
    title: "fitFooD",
    slug: "fitfood-nutrition-app",
    category: "mobile",
    previewTitle: "fitFooD App",
    previewSubtitle: "nutrition-and-food-scanner",
    previewStats: { left: "Focus: Sri Lankan Nutrition", right: "Stack: RN + Expo + Supabase" },
    description:
      "Comprehensive mobile nutrition management application combining food scanning, meal planning, marketplace integration, and nutrition tracking with a focus on local Sri Lankan foods.",
    longDescription:
      "Mobile nutrition and wellness application built with React Native, Expo Go, and Supabase to support food scanning, meal planning, marketplace integration, and daily nutrition tracking tailored around local Sri Lankan foods.",
    tech: ["React Native", "Expo Go", "Supabase", "JavaScript"],
    gradient: "from-lime-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 10,
    title: "MidGreen",
    slug: "midgreen-plant-store",
    category: "mobile",
    previewTitle: "MidGreen Store",
    previewSubtitle: "plant-ecommerce-mobile",
    previewStats: { left: "Catalog: 30+ Plants", right: "Stack: RN + Expo + Supabase" },
    description:
      "Full-featured mobile plant e-commerce application connecting plant lovers with a seamless shopping experience, including 30+ plants, a shopping cart, multiple payment options, and user reviews.",
    longDescription:
      "Mobile plant store application built with React Native, Expo Go, and Supabase—with AI assistance—featuring 30+ plant listings, shopping cart management, multiple payment options, and user reviews.",
    tech: ["React Native", "Expo Go", "Supabase", "JavaScript"],
    gradient: "from-green-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  },
  {
    id: 11,
    title: "Gold Tracker API App",
    slug: "gold-tracker-api-app",
    category: "fullstack",
    previewTitle: "Gold Tracker Web",
    previewSubtitle: "java-rest-api-dashboard",
    previewStats: { left: "Type: Web App", right: "Stack: Java API + Bootstrap" },
    description:
      "Web application for tracking gold goals and activity with milestone management, recurring tasks, reminders, and dashboard analysis, built with a Java REST API backend and HTML, CSS, JavaScript, and Bootstrap.",
    longDescription:
      "Full-stack web application featuring milestone management, recurring tasks, reminders, and analytical dashboards, powered by a Java backend with REST API integrations and a Bootstrap-styled HTML, CSS, and JavaScript interface.",
    tech: ["Java", "REST API", "HTML", "CSS", "JavaScript", "Bootstrap"],
    gradient: "from-yellow-900 to-slate-900",
    borderColor: "hover:border-brand-500/50",
    accentColor: "text-brand-400",
  }
];