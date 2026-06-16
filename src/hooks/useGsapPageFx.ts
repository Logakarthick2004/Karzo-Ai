import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Applies a reusable set of GSAP interactions to a page scope:
 * - Scroll-triggered reveal on `.gsap-reveal` (or `.glass-card` fallback)
 * - Parallax on `.gsap-parallax` elements (data-speed attr, default 0.2)
 * - Tilt + lift hover on `.gsap-card` (or `.glass-card` fallback)
 * - Header parallax on `.gsap-header`
 */
export function useGsapPageFx(scopeRef: RefObject<HTMLElement>) {
  useEffect(() => {
    if (!scopeRef.current) return;
    const scope = scopeRef.current;

    const ctx = gsap.context(() => {
      // Reveal cards on scroll
      const reveals = scope.querySelectorAll<HTMLElement>(
        ".gsap-reveal, .glass-card"
      );
      reveals.forEach((el, i) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: (i % 3) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax sections
      scope.querySelectorAll<HTMLElement>(".gsap-parallax").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.25");
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Header parallax / fade
      scope.querySelectorAll<HTMLElement>(".gsap-header").forEach((el) => {
        gsap.to(el, {
          yPercent: 25,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Card hover tilt
      const cards = scope.querySelectorAll<HTMLElement>(
        ".gsap-card, .glass-card"
      );
      cards.forEach((card) => {
        card.style.transformStyle = "preserve-3d";
        const enter = () =>
          gsap.to(card, { y: -8, scale: 1.02, duration: 0.4, ease: "power2.out" });
        const leave = () =>
          gsap.to(card, {
            y: 0,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          gsap.to(card, {
            rotateY: px * 8,
            rotateX: -py * 8,
            duration: 0.4,
            ease: "power2.out",
            transformPerspective: 800,
          });
        };
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        card.addEventListener("mousemove", move);
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
