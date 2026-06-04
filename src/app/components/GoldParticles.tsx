import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function GoldParticles() {
  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.5 + 0.2,
    })), []
  );

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: "-10px",
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: p.size > 3
              ? "linear-gradient(135deg, #C9A84C, #FFD700)"
              : "#C9A84C",
            opacity: p.opacity,
            animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: p.size > 2 ? `0 0 ${p.size * 2}px rgba(255,215,0,0.4)` : "none",
          }}
        />
      ))}
    </div>
  );
}
