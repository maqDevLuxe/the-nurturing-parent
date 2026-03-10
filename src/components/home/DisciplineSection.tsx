import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Check } from "lucide-react";

const steps = [
  "Pause & regulate your own emotions first",
  "Connect with empathy before correcting",
  "Name the feeling behind the behavior",
  "Set the boundary with warmth and clarity",
  "Offer a repair or reconnection moment",
];

const DisciplineSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            tag="Gentle Discipline"
            title="The 5-Step Framework"
            description="Our signature approach to guiding behavior—rooted in neuroscience and practiced by thousands of families."
          />
        </AnimatedSection>
        <div className="space-y-4">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm">
                <div className="w-8 h-8 rounded-full bg-gradient-warm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={14} className="text-primary-foreground" />
                </div>
                <div>
                  <span className="font-body text-xs text-muted-foreground font-semibold uppercase tracking-widest">Step {i + 1}</span>
                  <p className="font-display text-base font-semibold text-foreground mt-1">{s}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DisciplineSection;
