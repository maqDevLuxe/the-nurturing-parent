import AnimatedSection from "@/components/AnimatedSection";
import nurseryImage from "@/assets/nursery-room.jpg";

const NurseryImageSection = () => (
  <section className="relative">
    <AnimatedSection>
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={nurseryImage}
          alt="Premium modern nursery design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <p className="font-display text-2xl md:text-4xl font-bold text-primary-foreground max-w-xl leading-tight">
            Create spaces where little minds <span className="italic text-terracotta-light">flourish</span>
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

export default NurseryImageSection;
