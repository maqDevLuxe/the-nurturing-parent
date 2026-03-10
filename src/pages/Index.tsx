import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import EndorsementsSection from "@/components/home/EndorsementsSection";
import PhilosophiesSection from "@/components/home/PhilosophiesSection";
import CoursesSection from "@/components/home/CoursesSection";
import MetricsSection from "@/components/home/MetricsSection";
import CommunityPreviewSection from "@/components/home/CommunityPreviewSection";
import ExpertsSection from "@/components/home/ExpertsSection";
import NurseryImageSection from "@/components/home/NurseryImageSection";
import CountersSection from "@/components/home/CountersSection";
import JournalSection from "@/components/home/JournalSection";
import DisciplineSection from "@/components/home/DisciplineSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.2 });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EndorsementsSection />
      <PhilosophiesSection />
      <CoursesSection />
      <MetricsSection />
      <CommunityPreviewSection />
      <ExpertsSection />
      <NurseryImageSection />
      <CountersSection />
      <JournalSection />
      <DisciplineSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
