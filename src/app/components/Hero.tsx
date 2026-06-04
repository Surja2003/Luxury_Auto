import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1776102669015-21d5f6c0cdf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrJTIwZHJhbWF0aWMlMjBzaG93cm9vbXxlbnwxfHx8fDE3ODA1NzE2ODV8MA&ixlib=rb-4.1.0&q=80&w=1920";

function MagneticButton({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = "translate(0,0)";
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "16px 36px",
        fontFamily: "'Jost', sans-serif",
        fontSize: "11px",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "transform 0.3s ease, background 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        cursor: "none",
        ...(primary
          ? {
              background: "linear-gradient(135deg, #C9A84C, #FFD700)",
              color: "#050505",
              border: "1px solid transparent",
              fontWeight: 600,
              boxShadow: "0 8px 32px rgba(201,168,76,0.25)",
            }
          : {
              background: "transparent",
              color: "#C9A84C",
              border: "1px solid rgba(201,168,76,0.5)",
            }),
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (primary) {
          el.style.boxShadow = "0 12px 48px rgba(255,215,0,0.4)";
        } else {
          el.style.background = "rgba(201,168,76,0.08)";
          el.style.borderColor = "#C9A84C";
        }
      }}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ken Burns background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <img
          src={HERO_IMAGE}
          alt="Luxury cars in showroom"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            animation: "kenBurns 20s ease-in-out infinite alternate",
            transformOrigin: "center center",
            willChange: "transform",
          }}
        />
        {/* Multi-layer overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.65) 50%, rgba(5,5,5,0.82) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(139,0,0,0.08) 0%, transparent 60%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)",
        }} />
      </div>

      {/* Geometric gold frame lines */}
      <div aria-hidden style={{ position: "absolute", inset: "clamp(16px,3vw,40px)", zIndex: 1, pointerEvents: "none" }}>
        {/* Top-left corner */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "60px", background: "linear-gradient(180deg, #C9A84C, transparent)" }} />
        {/* Top-right corner */}
        <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "1px", background: "linear-gradient(270deg, #C9A84C, transparent)" }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "60px", background: "linear-gradient(180deg, #C9A84C, transparent)" }} />
        {/* Bottom-left corner */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "60px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "1px", height: "60px", background: "linear-gradient(0deg, #C9A84C, transparent)" }} />
        {/* Bottom-right corner */}
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "60px", height: "1px", background: "linear-gradient(270deg, #C9A84C, transparent)" }} />
        <div style={{ position: "absolute", bottom: 0, right: 0, width: "1px", height: "60px", background: "linear-gradient(0deg, #C9A84C, transparent)" }} />
      </div>

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        padding: "0 clamp(20px, 5vw, 80px)",
        maxWidth: "900px",
      }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "28px",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C)" }} />
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "#C9A84C",
            textTransform: "uppercase",
          }}>
            Abu Dhabi, UAE · أبوظبي
          </span>
          <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 7vw, 84px)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginBottom: "12px",
            color: "#F5F5F0",
          }}
        >
          WHERE LUXURY
          <br />
          <em style={{
            background: "linear-gradient(135deg, #C9A84C 0%, #FFD700 50%, #C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontStyle: "italic",
            animation: "textGlow 4s ease-in-out infinite",
          }}>
            MEETS THE ROAD
          </em>
        </motion.h1>

        {/* Arabic headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "clamp(16px, 2.5vw, 24px)",
            color: "rgba(201,168,76,0.7)",
            marginBottom: "16px",
            direction: "rtl",
            fontWeight: 300,
          }}
        >
          حيث تلتقي الفخامة بالطريق
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(15px, 2vw, 20px)",
            color: "rgba(245,245,240,0.55)",
            marginBottom: "48px",
            fontStyle: "italic",
            letterSpacing: "0.03em",
          }}
        >
          Premium Pre-Owned Vehicles — Certified & Ready for the Road
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 24 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <MagneticButton href="#collection" primary>
            Explore Collection
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </MagneticButton>
          <MagneticButton href="https://wa.me/971501234567">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp Now
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(201,168,76,0.5)", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{
          width: "1px",
          height: "48px",
          background: "linear-gradient(180deg, rgba(201,168,76,0.6), transparent)",
          position: "relative",
          overflow: "hidden",
        }}>
          <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "50%",
              background: "linear-gradient(180deg, transparent, #FFD700)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
