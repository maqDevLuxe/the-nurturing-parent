import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { TrendingUp, Smile, BookOpen, Users } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Emotional Regulation", value: "94%", desc: "of children show improvement" },
  { icon: Smile, label: "Parent Confidence", value: "89%", desc: "feel more confident daily" },
  { icon: BookOpen, label: "Learning Milestones", value: "3.2x", desc: "faster skill acquisition" },
  { icon: Users, label: "Family Bonding", value: "97%", desc: "report stronger connections" },
];

const MetricsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Child Development" title="Measurable Impact on Your Family" />
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center p-6 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300">
              <m.icon className="text-primary mx-auto mb-3" size={28} />
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{m.value}</div>
              <div className="font-body text-sm font-semibold text-foreground mb-1">{m.label}</div>
              <div className="font-body text-xs text-muted-foreground">{m.desc}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
