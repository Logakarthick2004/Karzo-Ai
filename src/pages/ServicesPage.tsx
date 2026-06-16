import { useRef } from "react";
import Services from "@/components/Services";
import ThreeDShowcase from "@/components/ThreeDShowcase";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import { useGsapPageFx } from "@/hooks/useGsapPageFx";

const ServicesPage = () => {
  const scope = useRef<HTMLDivElement>(null);
  useGsapPageFx(scope);

  return (
    <div ref={scope}>
      <div className="gsap-header">
        <PageHeader
          eyebrow="What we do"
          title="Services"
          highlight="that scale"
          subtitle="End-to-end digital solutions across AI, web, mobile, and enterprise software."
        />
      </div>
      <div className="gsap-parallax" data-speed="0.15">
        <Services />
      </div>
      <ThreeDShowcase />
      <FinalCTA />
    </div>
  );
};

export default ServicesPage;
