import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const articles = [
  { date: "Mar 5, 2026", title: "The Power of 'Good Enough' Parenting", category: "Mindset", read: "5 min" },
  { date: "Feb 28, 2026", title: "Why Children Need Boredom", category: "Development", read: "4 min" },
  { date: "Feb 20, 2026", title: "Rebuilding Connection After Conflict", category: "Relationships", read: "6 min" },
];

const JournalSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading tag="Parenting Journal" title="Thoughtful Reads for Modern Parents" />
      </AnimatedSection>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {articles.map((a, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <div className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-body text-xs text-primary font-semibold uppercase tracking-wider">{a.category}</span>
                <span className="font-body text-xs text-muted-foreground">{a.read} read</span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {a.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-3">{a.date}</p>
              <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary group-hover:gap-2 transition-all duration-300">
                Read More <ArrowRight size={14} />
              </span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default JournalSection;
