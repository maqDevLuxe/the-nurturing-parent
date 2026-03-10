import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

const CTASection = () => (
  <section id="join" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary-foreground blur-3xl" />
    </div>
    <div className="container mx-auto px-6 relative">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
            Begin Your Journey to <span className="italic">Intentional</span> Parenting
          </h2>
          <p className="font-body text-base text-primary-foreground/80 leading-relaxed mb-10">
            Join thousands of families who chose connection over correction. Your membership includes full course access, community forums, and live expert sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/community"
              className="bg-primary-foreground text-foreground font-body font-semibold text-sm px-10 py-4 rounded-full shadow-warm-lg hover:scale-105 transition-all duration-300 text-center"
            >
              Join the Community — $29/mo
            </Link>
            <Link
              to="/courses"
              className="border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold text-sm px-10 py-4 rounded-full hover:bg-primary-foreground/10 transition-all duration-300 text-center"
            >
              Preview Courses Free
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTASection;
