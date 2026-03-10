import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import expert1 from "@/assets/expert-1.jpg";
import expert2 from "@/assets/expert-2.jpg";
import expert3 from "@/assets/expert-3.jpg";

const experts = [
  { img: expert1, name: "Dr. Elena Vasquez", role: "Child Psychologist", bio: "15 years specializing in secure attachment and emotional development in early childhood." },
  { img: expert2, name: "Dr. Marcus Chen", role: "Pediatrician", bio: "Integrative pediatrics advocate focused on holistic child health and parent-child wellness." },
  { img: expert3, name: "Dr. Amara Osei", role: "Developmental Psychologist", bio: "Researcher in play-based learning and cognitive milestones for children ages 0–6." },
];

const ExpertsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Our Experts" title="Guided by Leading Minds" description="Every course and community discussion is shaped by world-class child development professionals." />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {experts.map((e, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 shadow-warm glow-terracotta-hover transition-all duration-500">
                <img src={e.img} alt={e.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{e.name}</h3>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-primary mt-1 mb-3">{e.role}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{e.bio}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExpertsSection;
