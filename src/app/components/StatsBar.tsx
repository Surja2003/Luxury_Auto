import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";
import { motion } from "motion/react";

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [active, target, duration]);

  return count;
}

const stats = [
  { value: 500, suffix: "+", label: "Cars Sold", labelAr: "سيارة مباعة" },
  { value: 10, suffix: "+", label: "Years Experience", labelAr: "سنوات خبرة" },
  { value: 27, suffix: "K+", label: "Followers", labelAr: "متابع" },
  { value: 100, suffix: "%", label: "Satisfaction", labelAr: "رضا العملاء" },
];

function StatItem({ stat, active, index }: { stat: typeof stats[0]; active: boolean; index: number }) {
  const count = useCounter(stat.value, 2000, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        textAlign: "center",
        padding: "0 20px",
        flex: 1,
        minWidth: "140px",
      }}
    >
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(36px, 5vw, 58px)",
        fontWeight: 400,
        background: "linear-gradient(135deg, #C9A84C 0%, #FFD700 50%, #C9A84C 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        lineHeight: 1,
        marginBottom: "8px",
        letterSpacing: "-0.02em",
      }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontFamily: "'Jost', sans-serif",
        fontSize: "clamp(10px, 1.2vw, 12px)",
        letterSpacing: "0.25em",
        color: "rgba(245,245,240,0.5)",
        textTransform: "uppercase",
        marginBottom: "4px",
      }}>
        {stat.label}
      </div>
      <div style={{
        fontFamily: "'Tajawal', sans-serif",
        fontSize: "12px",
        color: "rgba(201,168,76,0.45)",
        direction: "rtl",
      }}>
        {stat.labelAr}
      </div>
    </motion.div>
  );
}

export function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "80px clamp(20px, 5vw, 80px)",
        background: "linear-gradient(135deg, #0a0a0a 0%, #080808 50%, #060606 100%)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Background gold shimmer */}
      <div aria-hidden style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "200px",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Shimmer line */}
      <div aria-hidden style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        overflow: "hidden",
      }}>
        <div style={{
          width: "30%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.5), transparent)",
          animation: "shimmerSweep 4s ease-in-out infinite",
        }} />
      </div>

      <div
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "40px 0",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{
            display: "flex",
            flex: "1 1 200px",
            alignItems: "stretch",
          }}>
            <StatItem stat={stat} active={inView} index={i} />
            {i < stats.length - 1 && (
              <div style={{
                width: "1px",
                background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.2), transparent)",
                alignSelf: "stretch",
              }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
