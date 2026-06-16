import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ease-out ${
          scrolled
            ? "max-w-3xl mt-3 h-14 px-4 rounded-2xl bg-background/80 backdrop-blur-md border border-foreground/10 shadow-sm"
            : "max-w-7xl mt-0 h-20 px-6 lg:px-10 rounded-none bg-transparent border border-transparent"
        }`}
      >
        <Link
          to="/"
          className="w-10 h-10 rounded-lg bg-foreground flex items-center justify-center shrink-0"
          aria-label="Karzo"
        >
          <span className="text-background font-heading font-bold text-lg leading-none">K</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const active = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-[15px] text-foreground/80 hover:text-foreground transition-colors"
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-foreground" />
                )}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => navigate("/contact")}
          className="hidden md:inline-flex items-center h-11 px-5 rounded-lg bg-foreground text-background text-[15px] font-medium hover:bg-foreground/90 transition-colors shrink-0"
        >
          Get started
        </button>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden mx-4 rounded-2xl bg-foreground text-background"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-left text-sm font-medium px-3 py-2 rounded-lg hover:bg-background/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 h-11 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
