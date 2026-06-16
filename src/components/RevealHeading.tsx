import { motion } from "framer-motion";

interface RevealHeadingProps {
  text: string;
  className?: string;
  /** Index of word from which to apply gradient highlight (inclusive) */
  highlightFrom?: number;
}

const RevealHeading = ({ text, className = "", highlightFrom }: RevealHeadingProps) => {
  const words = text.split(" ");
  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0">
          <motion.span
            className={`inline-block ${highlightFrom !== undefined && i >= highlightFrom ? "gradient-text" : ""}`}
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
};

export default RevealHeading;
