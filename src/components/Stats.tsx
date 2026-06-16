import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Industries Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.8, ease: "easeOut" });
    return controls.stop;
  }, [inView, to, count]);

  useEffect(() => rounded.on("change", (v) => {
    if (ref.current) ref.current.textContent = v;
  }), [rounded]);

  return <span ref={ref}>0{suffix}</span>;
};

const Stats = () => (
  <section className="px-4 py-16">
    <div className="container mx-auto">
      <div className="surface-dark rounded-3xl p-10 md:p-14 relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-[400px] h-[300px] bg-primary/30 rounded-full blur-[100px]" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-heading font-bold text-background mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs md:text-sm text-background/60 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
