import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Arjun Mehta", role: "Founder, Startup Studio", text: "Karzo transformed our business with end-to-end automation. The AI workflows alone saved us 30+ hours a week." },
  { name: "Priya Raman", role: "Owner, Retail Brand", text: "Professional team, beautiful product, and excellent support. They felt like an in-house engineering team." },
  { name: "David Lin", role: "CTO, SaaS Startup", text: "Shipped our MVP in 4 weeks with a quality bar that genuinely surprised us. We'll never use anyone else." },
];

const Testimonials = () => (
  <section className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">Testimonials</p>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5">
          What Clients <span className="gradient-text">Say</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-7 hover-lift relative"
          >
            <Quote size={28} className="text-primary/40 mb-4" />
            <p className="text-base text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border/40">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
