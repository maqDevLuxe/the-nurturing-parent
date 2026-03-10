import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ShieldCheck, Brain, Heart } from "lucide-react";

const endorsements = [
  { icon: ShieldCheck, title: "Pediatrician Approved", desc: "Our curriculum is reviewed by board-certified pediatricians to ensure developmentally appropriate content." },
  { icon: Brain, title: "Psychologist Backed", desc: "Child psychologists co-design every module, grounded in attachment theory and emotional intelligence research." },
  { icon: Heart, title: "Parent Tested", desc: "Real families validate our approach—thousands of parents report stronger bonds and calmer homes." },
];

const EndorsementsSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Trusted & Endorsed" title="Backed by Science, Built with Heart" />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {endorsements.map((e, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="bg-background rounded-2xl p-8 shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1 text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-blush flex items-center justify-center mx-auto mb-5">
                <e.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">{e.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EndorsementsSection;
