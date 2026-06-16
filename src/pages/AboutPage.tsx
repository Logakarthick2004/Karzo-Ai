import Testimonials from "@/components/Testimonials";
import GSAPShowcase from "@/components/GSAPShowcase";
import PageHeader from "@/components/PageHeader";

const AboutPage = () => (
  <>
    <PageHeader
      eyebrow="Who we are"
      title="A studio in"
      highlight="motion"
      subtitle="We're a small team of designers and engineers obsessed with momentum."
    />
    <GSAPShowcase />
    <Testimonials />
  </>
);

export default AboutPage;
