import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Use native smooth scroll instead of Lenis for better performance
    if (prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "smooth";
      return;
    }

    // Highly optimized Lenis configuration for responsive scrolling
    const lenis = new Lenis({
      duration: 0.6, // Very fast response
      easing: (t) => 1 - Math.pow(1 - t, 2), // Simpler, faster easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 2, // Very responsive to wheel
      touchMultiplier: 2, // Very responsive to touch
      infinite: false,
      syncTouch: true,
    });

    let rafId: number;
    let isTabVisible = true;

    function raf(time: number) {
      if (isTabVisible) {
        lenis.raf(time);
      }
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Optimize performance by pausing when tab is not visible
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lenis.start();
      } else {
        lenis.stop();
      }
    };

    // Start immediately for responsive feel
    lenis.start();

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
