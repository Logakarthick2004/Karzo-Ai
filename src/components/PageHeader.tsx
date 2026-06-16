import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
}

const PageHeader = ({ eyebrow, title, highlight, subtitle }: Props) => (
  <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-4">
    <div className="container mx-auto text-center max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-5"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-6"
      >
        {title} <span className="gradient-text">{highlight}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHeader;
