import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { Observer } from "gsap/Observer";
import { TextPlugin } from "gsap/TextPlugin";
import { splitText } from "@/lib/splitText";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
  Draggable,
  Flip,
  Observer,
  TextPlugin
);

const phrases = [
  "We design with intent.",
  "We engineer for scale.",
  "We ship with momentum.",
  "We obsess over the details.",
];

const GSAPShowcase = () => {
  const root = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLSpanElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const flipGridRef = useRef<HTMLDivElement>(null);
  const observerHintRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TextPlugin — typewriter loop
      const tl = gsap.timeline({ repeat: -1 });
      phrases.forEach((p) => {
        tl.to(typeRef.current, { duration: 1.5, text: p, ease: "none" })
          .to({}, { duration: 1.2 })
          .to(typeRef.current, { duration: 0.8, text: "", ease: "none" });
      });

      // MotionPath — planet orbits along SVG path on scroll
      gsap.to(planetRef.current, {
        motionPath: {
          path: pathRef.current!,
          align: pathRef.current!,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top center",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Draggable card
      if (dragRef.current) {
        Draggable.create(dragRef.current, {
          type: "x,y",
          bounds: dragRef.current.parentElement!,
          inertia: false,
          edgeResistance: 0.7,
        });
      }

      // Observer — react to scroll/swipe gestures and bump the hint
      Observer.create({
        target: root.current!,
        type: "wheel,touch,pointer",
        onUp: () => gsap.fromTo(observerHintRef.current, { y: 10, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.4 }),
        onDown: () => gsap.fromTo(observerHintRef.current, { y: -10, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.4 }),
      });

      // SplitText substitute — animate each char on scroll-in
      if (splitRef.current) {
        const chars = splitText(splitRef.current, "chars");
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          stagger: 0.025,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: splitRef.current, start: "top 85%" },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const shuffleFlip = () => {
    if (!flipGridRef.current) return;
    const state = Flip.getState(flipGridRef.current.children);
    const items = Array.from(flipGridRef.current.children);
    items.sort(() => Math.random() - 0.5).forEach((el) => flipGridRef.current!.appendChild(el));
    Flip.from(state, { duration: 0.7, ease: "power3.inOut", absolute: true });
  };

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  };

  return (
    <section ref={root} className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-primary uppercase tracking-[0.25em] mb-3">
            Powered by GSAP
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Motion <span className="gradient-text">playground</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A live tour of the GSAP plugins we use daily — type, motion paths, drag, flip, and more.
          </p>
        </div>

        <div className="mb-10 text-center overflow-hidden">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">SplitText (free)</span>
          <h3 ref={splitRef} className="text-3xl md:text-5xl font-heading font-bold mt-2">
            Every character, choreographed.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* TextPlugin */}
          <div className="glass-card rounded-2xl p-8 min-h-[200px] flex flex-col justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">TextPlugin</span>
            <p className="text-2xl md:text-3xl font-heading font-semibold mt-4 min-h-[3em]">
              <span ref={typeRef} />
              <span className="inline-block w-[2px] h-7 bg-primary ml-1 animate-pulse align-middle" />
            </p>
          </div>

          {/* MotionPath */}
          <div className="glass-card rounded-2xl p-8 min-h-[200px] relative overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">MotionPath · ScrollTrigger</span>
            <p className="text-sm text-muted-foreground mt-2 mb-2">Scroll to orbit.</p>
            <svg viewBox="0 0 300 120" className="w-full h-32">
              <path
                ref={pathRef}
                d="M10,60 C60,10 120,110 160,60 C200,10 260,110 290,60"
                stroke="hsl(var(--primary) / 0.3)"
                strokeWidth="2"
                strokeDasharray="4 4"
                fill="none"
              />
            </svg>
            <div
              ref={planetRef}
              className="absolute w-6 h-6 rounded-full gradient-bg shadow-lg shadow-primary/40"
              style={{ top: 0, left: 0 }}
            />
          </div>

          {/* Draggable */}
          <div className="glass-card rounded-2xl p-8 min-h-[240px] relative overflow-hidden">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Draggable</span>
            <p className="text-sm text-muted-foreground mt-2">Grab the card.</p>
            <div className="relative h-40 mt-4 rounded-xl border border-dashed border-foreground/15">
              <div
                ref={dragRef}
                className="absolute top-4 left-4 w-28 h-28 rounded-2xl gradient-bg text-primary-foreground flex items-center justify-center font-heading font-bold text-sm cursor-grab active:cursor-grabbing select-none shadow-lg shadow-primary/30"
              >
                Drag me
              </div>
            </div>
          </div>

          {/* Flip */}
          <div className="glass-card rounded-2xl p-8 min-h-[240px]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Flip</span>
              <button
                onClick={shuffleFlip}
                className="text-xs px-3 py-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90"
              >
                Shuffle
              </button>
            </div>
            <div ref={flipGridRef} className="grid grid-cols-4 gap-2 mt-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg gradient-bg-subtle border border-primary/20 flex items-center justify-center font-heading font-bold text-primary"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Observer + ScrollTo */}
          <div className="glass-card rounded-2xl p-8 min-h-[160px] md:col-span-2 flex items-center justify-between gap-6 flex-wrap">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Observer · ScrollToPlugin</span>
              <p ref={observerHintRef} className="text-2xl font-heading font-semibold mt-2">
                Try scrolling — we're listening.
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="h-12 px-6 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90"
            >
              Scroll to top
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSAPShowcase;
