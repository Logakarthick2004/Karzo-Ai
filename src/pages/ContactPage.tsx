import Contact from "@/components/Contact";
import PageHeader from "@/components/PageHeader";

const ContactPage = () => (
  <>
    <PageHeader
      eyebrow="Get in touch"
      title="Let's build"
      highlight="together"
      subtitle="Ready to start your project? Drop us a message — we reply within 24 hours."
    />
    <Contact />
  </>
);

export default ContactPage;
