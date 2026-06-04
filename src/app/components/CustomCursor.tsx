import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const trailX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 });
  const trailY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 });
  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [data-hover]")) {
        isHovering.current = true;
        dotRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(2.5)");
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1.6)");
        ringRef.current?.style.setProperty("border-color", "rgba(255,215,0,0.8)");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button, a, [data-hover]")) {
        isHovering.current = false;
        dotRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
        ringRef.current?.style.setProperty("transform", "translate(-50%,-50%) scale(1)");
        ringRef.current?.style.setProperty("border-color", "rgba(201,168,76,0.5)");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Dot — snaps to cursor */}
      <motion.div
        ref={dotRef}
        style={{
          position: "fixed",
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #C9A84C, #FFD700)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "transform 0.15s ease",
          mixBlendMode: "normal",
        }}
      />
      {/* Ring — trails behind */}
      <motion.div
        ref={ringRef}
        style={{
          position: "fixed",
          left: trailX,
          top: trailY,
          x: "-50%",
          y: "-50%",
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1px solid rgba(201,168,76,0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          transition: "transform 0.2s ease, border-color 0.2s ease",
        }}
      />
    </>
  );
}
