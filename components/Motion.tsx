"use client";

import { useEffect } from "react";

// Einmal gemounteter Bewegungs-Manager:
//  - Scroll-Reveals via IntersectionObserver für alle [data-reveal]
//  - Hero-Parallax über --scroll-progress (0..1)
// Respektiert prefers-reduced-motion.
export function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // --- Scroll reveals ---
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.98 && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
    };
    const revealHashTarget = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: "auto", block: "start" });
      if (target.matches("[data-reveal]")) {
        target.classList.add("is-visible");
      }
      target.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.classList.add("is-visible");
      });
    };

    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: [0.01, 0.16], rootMargin: "0px 0px 10% 0px" }
      );
      els.forEach((el) => io.observe(el));
      revealVisible();
      revealHashTarget();
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          revealHashTarget();
          revealVisible();
        })
      );
      const fallback = window.setTimeout(() => {
        revealHashTarget();
        revealVisible();
      }, 1200);

      // --- Hero parallax progress ---
      let ticking = false;
      const root = document.documentElement;
      const update = () => {
        const vh = window.innerHeight || 1;
        const p = Math.min(1, Math.max(0, window.scrollY / vh));
        root.style.setProperty("--scroll-progress", p.toFixed(3));
        ticking = false;
      };
      const onScroll = () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      window.addEventListener("hashchange", revealHashTarget, { passive: true });

      return () => {
        window.clearTimeout(fallback);
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        window.removeEventListener("hashchange", revealHashTarget);
      };
    }
  }, []);

  return null;
}
