import { motion } from "framer-motion";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Happy family together" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    </div>

    <div className="relative container mx-auto px-6 py-32 md:py-0">
      <div className="max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-terracotta-light mb-6 block"
        >
          Exclusive Parenting Community
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
        >
          Raise with <br />
          <span className="italic text-terracotta-light">Intention</span> & Love
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-body text-base md:text-lg text-primary-foreground/80 leading-relaxed mb-8 max-w-lg"
        >
          Evidence-based courses, expert guidance, and an intimate community for parents who believe in nurturing the whole child.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#courses" className="bg-gradient-warm text-primary-foreground font-body font-semibold text-sm px-8 py-4 rounded-full glow-terracotta text-center transition-all duration-300 hover:scale-105">
            Explore Courses
          </a>
          <a href="#community" className="border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm px-8 py-4 rounded-full text-center transition-all duration-300 hover:bg-primary-foreground/10">
            Join Community
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
