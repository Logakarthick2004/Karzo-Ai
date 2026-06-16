import { motion } from "framer-motion";

const items = [
  "OpenAI", "React", "Next.js", "Supabase", "Stripe", "Figma",
  "TypeScript", "Vercel", "Node.js", "Tailwind", "PostgreSQL", "AWS",
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <section className="py-14 border-y border-border/50 overflow-hidden bg-background">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-[0.25em]">
          Built with the tools teams trust
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {row.map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-heading font-semibold text-foreground/40 hover:text-foreground transition-colors"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;
