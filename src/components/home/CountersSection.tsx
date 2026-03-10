import AnimatedSection from "@/components/AnimatedSection";
import { useEffect, useState, useRef } from "react";

const counters = [
  { target: 12400, label: "Families Enrolled", suffix: "+" },
  { target: 85, label: "Expert-Led Courses", suffix: "+" },
  { target: 32, label: "Countries Represented", suffix: "" },
  { target: 98, label: "Satisfaction Rate", suffix: "%" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(interval);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const CountersSection = () => (
  <section className="py-20 md:py-28 bg-gradient-blush">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {counters.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center">
              <AnimatedCounter target={c.target} suffix={c.suffix} />
              <p className="font-body text-sm text-muted-foreground mt-2 font-medium">{c.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
