import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { title: "Design", desc: "Crafted interfaces with character.", hue: "from-primary to-accent" },
  { title: "Build", desc: "Engineered for speed and scale.", hue: "from-accent to-primary" },
  { title: "Ship", desc: "Launched, measured, iterated.", hue: "from-primary/80 to-foreground" },
  { title: "Grow", desc: "Momentum compounded over time.", hue: "from-foreground to-primary" },
];

const ThreeDShowcase = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stage = root.current!.querySelector(".stage-3d") as HTMLElement;
      const items = gsap.utils.toArray<HTMLElement>(".card-3d");

      // Pin the section and rotate the stage in 3D as user scrolls
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + items.length * 600,
          scrub: 1,
          pin: true,
        },
      });

      items.forEach((_, i) => {
        const rot = -(360 / items.length) * i;
        tl.to(stage, { rotateY: rot, ease: "power2.inOut" }, i);
      });

      // Subtle float on each card
      items.forEach((el, i) => {
        gsap.to(el, {
          y: "+=14",
          duration: 2 + i * 0.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const radius = 360;

  return (
    <section
      ref={root}
      className="relative h-screen overflow-hidden bg-background"
      style={{ perspective: "1400px" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center mb-8 z-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            In three dimensions
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold">
            Scroll the <span className="gradient-text">carousel</span>
          </h2>
        </div>

        <div
          className="stage-3d relative"
          style={{
            width: 320,
            height: 380,
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((c, i) => {
            const angle = (360 / cards.length) * i;
            return (
              <div
                key={c.title}
                className="card-3d absolute inset-0 rounded-3xl glass-card p-8 flex flex-col justify-end shadow-2xl"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${c.hue} opacity-20`}
                />
                <div className="relative">
                  <span className="text-6xl font-heading font-bold text-primary/30">
                    0{i + 1}
                  </span>
                  <h3 className="text-3xl font-heading font-bold mt-2">{c.title}</h3>
                  <p className="text-muted-foreground mt-2">{c.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeDShowcase;
