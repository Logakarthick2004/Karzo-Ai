import { motion } from "framer-motion";
import { Brain, Globe, Smartphone, Code2 } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions",
    description: "Automation, chatbots, AI analytics, recommendation engines, predictive models, and NLP systems.",
    features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "Workflow Automation"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Business websites, dashboards, SaaS platforms, PWAs, and full-scale e-commerce experiences.",
    features: ["Corporate Sites", "E-commerce", "SaaS Platforms", "CMS & Admin"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform apps engineered for performance, polish, and growth.",
    features: ["Android & iOS", "Flutter", "React Native", "App Maintenance"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "ERP, CRM, inventory, HR & payroll, and bespoke workflow automation built around your business.",
    features: ["ERP Systems", "CRM Platforms", "Inventory & HR", "Automation"],
  },
];

const Services = () => (
  <section id="services" className="section-padding relative">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-4">What We Do</p>
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5">
          Services That <span className="gradient-text">Drive Results</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          End-to-end digital solutions across AI, web, mobile, and enterprise software — engineered for scale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass-card glow-border rounded-2xl p-8 hover-lift relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span key={f} className="text-xs px-3 py-1 rounded-full bg-secondary/60 border border-border/60 text-foreground/80">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
