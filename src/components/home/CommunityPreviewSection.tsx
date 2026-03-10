import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { MessageCircle, Users, Lock } from "lucide-react";

const threads = [
  { author: "Sarah M.", topic: "How we transitioned away from screen time", replies: 24, time: "2h ago" },
  { author: "James K.", topic: "Bedtime routine that actually works", replies: 41, time: "4h ago" },
  { author: "Emily R.", topic: "Navigating toddler tantrums with empathy", replies: 33, time: "6h ago" },
];

const CommunityPreviewSection = () => (
  <section id="community" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <SectionHeading
          tag="Private Community"
          title="A Safe Space for Honest Conversations"
          description="Connect with thoughtful parents who share your values. Moderated by experts, powered by kindness."
        />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="max-w-2xl mx-auto bg-background rounded-2xl shadow-warm-lg p-8 border border-border">
          <div className="flex items-center gap-2 mb-6">
            <Lock size={14} className="text-primary" />
            <span className="font-body text-xs font-semibold uppercase tracking-widest text-primary">Members Only</span>
          </div>
          <div className="space-y-4">
            {threads.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-card hover:bg-blush-light transition-colors duration-300 cursor-pointer group">
                <div className="flex-1">
                  <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{t.topic}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">by {t.author} · {t.time}</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MessageCircle size={14} />
                  <span className="font-body text-xs">{t.replies}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a href="#join" className="font-body text-sm font-semibold text-primary hover:underline">
              Join to unlock all discussions →
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CommunityPreviewSection;
