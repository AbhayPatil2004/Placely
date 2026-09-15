"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { LearnSection } from "./LearnSection";
import { Navbar } from "./Navbar";
import { PracticeSection } from "./PracticeSection";
import { TestSection } from "./TestSection";

gsap.registerPlugin(ScrollTrigger);

export function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-word",
        { opacity: 0, y: 36 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.12, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.14, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.22, ease: "power2.out" }
      );

      gsap.to(".hero-word", {
        y: -72,
        opacity: 0.12,
        scale: 0.97,
        scrollTrigger: {
          trigger: "#learn",
          start: "top 72%",
          end: "top 18%",
          scrub: 1.1,
        },
      });

      gsap.to(".hero-sub", {
        y: -32,
        opacity: 0,
        scrollTrigger: {
          trigger: "#learn",
          start: "top 72%",
          end: "top 18%",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-cta", {
        y: -18,
        opacity: 0,
        scrollTrigger: {
          trigger: "#learn",
          start: "top 72%",
          end: "top 18%",
          scrub: 1.2,
        },
      });

      gsap.utils.toArray<HTMLElement>(".learn-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".practice-preview",
        { opacity: 0, y: 60, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#practice",
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.to(".practice-preview", {
        y: -20,
        opacity: 0.2,
        scrollTrigger: {
          trigger: "#test",
          start: "top 74%",
          end: "top 28%",
          scrub: 1.1,
        },
      });

      gsap.fromTo(
        ".test-card",
        { opacity: 0, y: 64 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#test",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".cta-panel",
        { opacity: 0, y: 52 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#cta",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-[#171717] text-[#eeeeee]">
      <Navbar />
      <main>
        <Hero />
        <LearnSection />
        <PracticeSection />
        <TestSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
