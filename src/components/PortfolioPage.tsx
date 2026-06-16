import { useRef } from "react";
import Portfolio from "@/components/Portfolio";
import PinnedWindmill from "@/components/PinnedWindmill";
import PageHeader from "@/components/PageHeader";
import { useGsapPageFx } from "@/hooks/useGsapPageFx";

const PortfolioPage = () => {
  const scope = useRef<HTMLDivElement>(null);
  useGsapPageFx(scope);

  return (
    <div ref={scope}>
      <div className="gsap-header">
        <PageHeader
          eyebrow="Our work"
          title="Selected"
          highlight="projects"
          subtitle="Real solutions we've shipped across industries — built with intent."
        />
      </div>
      <div className="gsap-parallax" data-speed="0.12">
        <Portfolio />
      </div>
      <PinnedWindmill />
    </div>
  );
};

export default PortfolioPage;
