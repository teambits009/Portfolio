"use client";

import { useEffect } from "react";

/**
 * Adds `.in` to every `.reveal` element as it enters the viewport, with a
 * subtle stagger between siblings. Progressive enhancement: if the observer
 * or motion preferences say no, everything is shown immediately.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const groups = new Map<Element | null, HTMLElement[]>();
    els.forEach((el) => {
      const key = el.parentElement;
      const list = groups.get(key) ?? [];
      list.push(el);
      groups.set(key, list);
    });
    groups.forEach((list) => {
      list.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
        io.observe(el);
      });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
