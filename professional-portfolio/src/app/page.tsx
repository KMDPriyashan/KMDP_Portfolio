"use client";
import { useState } from "react";
import ParticleBackground from "@/components/layout/ParticleBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Terminal from "@/components/ui/Terminal";
import ProjectModal from "@/components/ui/ProjectModal";
import Toast from "@/components/ui/Toast";
import { useToast } from "@/hooks/useToast";
import { Project } from "@/types";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { toast, show } = useToast();

  return (
    <>
      <ParticleBackground />
      <Navbar onTerminalOpen={() => setTerminalOpen(true)} />

      <main className="relative">
        <Hero onTerminalOpen={() => setTerminalOpen(true)} onToast={show} />
        <StatsBar />
        <About />
        <Skills />
        <Experience />
        <Projects onOpenModal={setSelectedProject} />
        <Testimonials />
        <Contact onToast={show} />
      </main>

      <Footer />

      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <Toast message={toast.msg} visible={toast.visible} />
    </>
  );
}