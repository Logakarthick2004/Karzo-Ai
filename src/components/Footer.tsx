import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => {

  return (
    <footer className="px-4 pb-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-dark rounded-3xl p-10 md:p-14 relative overflow-hidden"
        >
          <div className="absolute -bottom-32 -right-20 w-[500px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />

          <div className="grid md:grid-cols-12 gap-10 relative">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-7 h-7 rounded-md gradient-bg flex items-center justify-center text-xs font-bold text-primary-foreground">K</span>
                <span className="text-xl font-heading font-bold text-background">Karzo</span>
              </div>
              <p className="text-sm text-background/60 max-w-sm leading-relaxed">
                Your one-stop digital partner — building AI, web, mobile, and custom software for ambitious businesses.
              </p>
              <div className="flex gap-2 mt-6">
                {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-9 h-9 rounded-full border border-background/15 flex items-center justify-center text-background/70 hover:text-primary hover:border-primary/40 transition-colors">
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-background/50 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link key={link.path} to={link.path} className="text-sm text-background/80 hover:text-primary transition-colors text-left">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-background/50 mb-4">Get in touch</h4>
              <a href="mailto:hello@karzo.dev" className="text-base text-background font-medium flex items-center gap-1 hover:text-primary transition-colors">
                hello@karzo.dev <ArrowUpRight size={16} />
              </a>
              <p className="text-sm text-background/60 mt-2">Chennai · India</p>
            </div>
          </div>

          <div className="border-t border-background/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 relative">
            <p className="text-xs text-background/50">© {new Date().getFullYear()} Karzo. All rights reserved.</p>
            <p className="text-xs text-background/50">Crafted with intent.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
