import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { Users, MessageCircle, Video, BookOpen, Shield, Heart } from "lucide-react";

const benefits = [
  { icon: MessageCircle, title: "Private Forums", desc: "Moderated discussion spaces for honest, judgment-free conversations." },
  { icon: Video, title: "Live Expert Sessions", desc: "Monthly live Q&A with child psychologists and pediatricians." },
  { icon: BookOpen, title: "Resource Library", desc: "Exclusive guides, printables, and toolkits updated weekly." },
  { icon: Users, title: "Local Meetups", desc: "Connect with nearby families through organized community events." },
  { icon: Shield, title: "Safe & Private", desc: "Vetted membership ensures a respectful, trusted environment." },
  { icon: Heart, title: "Peer Support", desc: "Find your parenting tribe—parents who truly understand." },
];

const Community = () => {
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
            <SectionHeading tag="Community" title="Your Parenting Village Awaits" description="An intimate, expert-moderated community where families grow together with kindness and intention." />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-warm text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-blush flex items-center justify-center mx-auto mb-5">
                    <b.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{b.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="text-center mt-16">
              <a href="#" className="bg-gradient-warm text-primary-foreground font-body font-semibold text-sm px-10 py-4 rounded-full glow-terracotta hover:scale-105 transition-all duration-300 inline-block">
                Join the Community — $29/mo
              </a>
              <p className="font-body text-xs text-muted-foreground mt-4">Cancel anytime · 7-day free trial</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Community;
