import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 className="font-display text-xl font-bold mb-4">
            Babui <span className="text-terracotta-light">Concept</span>
          </h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Nurturing families with evidence-based parenting, gentle discipline, and a warm community of like-minded parents.
          </p>
        </div>
        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Courses", "Community", "Philosophy"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Resources</h4>
          <div className="flex flex-col gap-3">
            {["Parenting Journal", "Expert Directory", "FAQ", "Contact"].map((l) => (
              <span key={l} className="text-sm opacity-70 cursor-pointer hover:opacity-100 transition-opacity">{l}</span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-body text-xs font-semibold uppercase tracking-widest mb-4 opacity-60">Stay Connected</h4>
          <p className="text-sm opacity-70 mb-4">Join our newsletter for gentle parenting insights.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-full px-4 py-2 text-sm flex-1 outline-none placeholder:opacity-40"
            />
            <button className="bg-gradient-warm px-5 py-2 rounded-r-full text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-50">© 2026 Babui Concept. All rights reserved.</p>
        <p className="text-xs opacity-50 flex items-center gap-1">
          Made with <Heart size={12} className="text-terracotta-light" /> for families everywhere
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
