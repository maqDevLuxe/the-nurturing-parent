import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

const philosophies = [
  { num: "01", title: "Gentle Discipline", desc: "Guide behavior through empathy, connection, and firm-but-kind boundaries—never punishment." },
  { num: "02", title: "Secure Attachment", desc: "Build an unshakable emotional foundation so your child thrives with confidence and resilience." },
  { num: "03", title: "Mindful Presence", desc: "Quality over quantity—learn to be fully present in small daily moments that shape a lifetime." },
  { num: "04", title: "Whole-Child Growth", desc: "Nurture cognitive, emotional, social, and physical development in beautiful harmony." },
];

const PhilosophiesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Our Philosophy" title="The Babui Parenting Pillars" description="Four core principles that guide every course, resource, and community conversation." />
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {philosophies.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex gap-5 p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm group">
              <span className="font-display text-3xl font-bold text-primary/30 group-hover:text-primary transition-colors">{p.num}</span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PhilosophiesSection;
