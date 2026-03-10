import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Quote } from "lucide-react";

const testimonials = [
  { text: "Babui Concept completely transformed how I connect with my daughter. The gentle discipline framework gave us tools we use every single day.", author: "Maria T.", role: "Mother of two, NYC" },
  { text: "As a father, I felt lost navigating modern parenting. This community showed me I wasn't alone and gave me the confidence to lead with love.", author: "David L.", role: "Father of one, London" },
  { text: "The courses are beautifully made and deeply practical. My husband and I now parent as a team with a shared language and philosophy.", author: "Priya K.", role: "Mother of three, Toronto" },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Testimonials" title="From the Hearts of Real Parents" />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-warm h-full flex flex-col">
              <Quote className="text-primary/30 mb-4" size={28} />
              <p className="font-body text-sm text-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display text-sm font-bold text-foreground">{t.author}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
