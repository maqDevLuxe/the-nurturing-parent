import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Play, Clock } from "lucide-react";
import courseThumb1 from "@/assets/course-thumb-1.jpg";
import courseThumb2 from "@/assets/course-thumb-2.jpg";
import courseThumb3 from "@/assets/course-thumb-3.jpg";

const courses = [
  { img: courseThumb1, title: "Nurturing Through Reading", duration: "6 Modules", tag: "Ages 0–3" },
  { img: courseThumb2, title: "Creative Play & Development", duration: "8 Modules", tag: "Ages 2–5" },
  { img: courseThumb3, title: "Montessori at Home", duration: "10 Modules", tag: "Ages 1–4" },
];

const CoursesSection = () => (
  <section id="courses" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Video Course Library" title="Learn at Your Own Pace" description="Beautifully produced video courses designed by child development experts for modern families." />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="group bg-background rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-500">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center">
                    <Play className="text-primary ml-1" size={20} />
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground font-body text-xs font-semibold px-3 py-1 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={14} />
                  <span className="font-body text-xs">{c.duration}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
