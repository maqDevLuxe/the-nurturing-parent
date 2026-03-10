import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  { num: "01", title: "Gentle Discipline", body: "We believe in guiding behavior through empathy and connection, not fear or punishment. By understanding the emotional needs behind every behavior, parents can set loving boundaries that teach rather than shame. Our approach is rooted in decades of research on positive behavior guidance." },
  { num: "02", title: "Secure Attachment", body: "The parent-child bond is the single greatest predictor of a child's emotional health. We teach parents how to build deep, secure attachment through responsive caregiving, attunement, and consistent emotional availability—creating a foundation for lifelong resilience." },
  { num: "03", title: "Mindful Presence", body: "In a world of constant distraction, the greatest gift we can give our children is our full attention. We practice and teach strategies for being truly present during everyday moments—mealtimes, bedtime, play—transforming ordinary interactions into extraordinary connections." },
  { num: "04", title: "Whole-Child Development", body: "Every child is a complex, beautiful ecosystem of cognitive, emotional, social, and physical needs. Our holistic approach ensures that no dimension is neglected, helping children develop into well-rounded, confident, and compassionate human beings." },
];

const Philosophy = () => {
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
            <SectionHeading tag="Our Philosophy" title="The Heart of Babui Concept" description="We exist to help families thrive through intentional, evidence-based, and deeply loving parenting practices." />
          </AnimatedSection>
          <div className="max-w-3xl mx-auto space-y-8">
            {pillars.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm bg-card">
                  <div className="flex items-start gap-6">
                    <span className="font-display text-4xl font-bold text-primary/20">{p.num}</span>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-3">{p.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                    </div>
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

export default Philosophy;
