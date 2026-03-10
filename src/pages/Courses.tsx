import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Play, Clock, Star } from "lucide-react";
import courseThumb1 from "@/assets/course-thumb-1.jpg";
import courseThumb2 from "@/assets/course-thumb-2.jpg";
import courseThumb3 from "@/assets/course-thumb-3.jpg";

const courses = [
  { img: courseThumb1, title: "Nurturing Through Reading", duration: "6 Modules · 3.5 hrs", tag: "Ages 0–3", rating: "4.9", students: "2,840" },
  { img: courseThumb2, title: "Creative Play & Development", duration: "8 Modules · 5 hrs", tag: "Ages 2–5", rating: "4.8", students: "3,120" },
  { img: courseThumb3, title: "Montessori at Home", duration: "10 Modules · 7 hrs", tag: "Ages 1–4", rating: "4.9", students: "4,560" },
  { img: courseThumb1, title: "Emotional Intelligence Foundations", duration: "7 Modules · 4 hrs", tag: "Ages 3–6", rating: "4.7", students: "1,980" },
  { img: courseThumb2, title: "Sibling Harmony", duration: "5 Modules · 3 hrs", tag: "All Ages", rating: "4.8", students: "2,210" },
  { img: courseThumb3, title: "Sleep & Routine Mastery", duration: "6 Modules · 3.5 hrs", tag: "Ages 0–2", rating: "4.9", students: "5,430" },
];

const Courses = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, duration: 1.2 });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <SectionHeading tag="Course Library" title="Expert-Led Video Courses" description="Beautifully produced, deeply practical courses designed to transform your parenting journey." />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500 border border-border">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                        <Play className="text-primary ml-1" size={20} />
                      </div>
                    </div>
                    <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-body text-xs font-semibold px-3 py-1 rounded-full">{c.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-3">
                      <span className="flex items-center gap-1 font-body text-xs"><Clock size={14} />{c.duration}</span>
                      <span className="flex items-center gap-1 font-body text-xs"><Star size={14} className="text-primary" />{c.rating}</span>
                    </div>
                    <p className="font-body text-xs text-muted-foreground">{c.students} families enrolled</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
