import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PinnedWindmill = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Windmill: pin and rotate
      gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: "#pin-windmill",
          trigger: "#pin-windmill",
          start: "top top",
          endTrigger: "#pin-windmill-wrap",
          end: "bottom bottom",
        },
      }).to("#pin-windmill-svg", { rotateZ: 900, ease: "none" });

      // Side text panels: slide up into view as page scrolls
      gsap.utils.toArray<HTMLElement>(".windmill-line").forEach((el, i) => {
        gsap.from(el, {
          yPercent: 120,
          opacity: 0,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.05,
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const lines = [
    "Momentum in motion.",
    "Every interaction crafted.",
    "Precision meets play.",
    "Built to move with you.",
  ];

  return (
    <div ref={wrapRef}>
      <section
        id="pin-windmill-wrap"
        className="relative bg-background"
      >
        <div className="grid md:grid-cols-2 gap-10 section-padding">
          {/* Sticky windmill on the left */}
          <div
            id="pin-windmill"
            className="h-screen flex flex-col items-center justify-center gap-8"
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">
              Scroll to spin
            </p>
            <svg
              id="pin-windmill-svg"
              width="260"
              height="260"
              viewBox="0 0 100 100"
              className="text-primary"
            >
              <g fill="currentColor">
                <path d="M50 50 L50 5 Q60 25 50 50 Z" />
                <path d="M50 50 L95 50 Q75 60 50 50 Z" />
                <path d="M50 50 L50 95 Q40 75 50 50 Z" />
                <path d="M50 50 L5 50 Q25 40 50 50 Z" />
                <circle cx="50" cy="50" r="6" className="text-foreground" fill="currentColor" />
              </g>
            </svg>
          </div>

          {/* Text column that scrolls past on the right */}
          <div className="flex flex-col justify-center gap-16 py-[30vh]">
            {lines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <h2 className="windmill-line text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  {i === 0 ? (
                    <>
                      Momentum in <span className="gradient-text">motion</span>.
                    </>
                  ) : (
                    line
                  )}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PinnedWindmill;
