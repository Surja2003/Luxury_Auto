import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    title: "Verified Cars",
    titleAr: "سيارات موثّقة",
    desc: "Every vehicle undergoes a rigorous 150-point inspection by certified technicians before listing.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Best Price Guarantee",
    titleAr: "ضمان أفضل سعر",
    desc: "We match any verifiable lower price from a licensed UAE dealer. No negotiation needed.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
      </svg>
    ),
    title: "Easy Financing",
    titleAr: "تمويل ميسّر",
    desc: "Flexible financing plans with top UAE banks. Get pre-approved in under 24 hours.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
    ),
    title: "WhatsApp Support 24/7",
    titleAr: "دعم واتساب على مدار الساعة",
    desc: "Talk to a real expert anytime. Get instant responses, vehicle videos, and custom quotes.",
  },
];

function FeatureCard({
  feat,
  index,
  globalInView,
}: {
  feat: (typeof features)[0];
  index: number;
  globalInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={globalInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "36px 28px",
        background: hovered ? "rgba(201,168,76,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.06)"}`,
        transition: "all 0.35s ease",
        cursor: "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,168,76,0.04)"
          : "none",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          border: `1px solid ${hovered ? "rgba(201,168,76,0.5)" : "rgba(201,168,76,0.2)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "24px",
          color: "#C9A84C",
          transition: "all 0.3s ease",
          background: hovered ? "rgba(201,168,76,0.06)" : "transparent",
          boxShadow: hovered ? "0 0 20px rgba(201,168,76,0.1)" : "none",
        }}
      >
        {feat.icon}
      </div>

      <div
        style={{
          width: hovered ? "36px" : "20px",
          height: "1px",
          background: "linear-gradient(90deg, #C9A84C, transparent)",
          marginBottom: "16px",
          transition: "width 0.3s ease",
        }}
      />

      <h3
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(16px, 1.6vw, 20px)",
          fontWeight: 500,
          color: "#F5F5F0",
          marginBottom: "6px",
          letterSpacing: "0.01em",
        }}
      >
        {feat.title}
      </h3>
      <div
        style={{
          fontFamily: "'Tajawal', sans-serif",
          fontSize: "12px",
          color: "rgba(201,168,76,0.5)",
          marginBottom: "14px",
          direction: "rtl",
        }}
      >
        {feat.titleAr}
      </div>
      <p
        style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "13px",
          color: "rgba(245,245,240,0.45)",
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {feat.desc}
      </p>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      style={{
        padding: "100px clamp(20px, 5vw, 80px)",
        background: "#050505",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(139,0,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div ref={ref} style={{ textAlign: "center", marginBottom: "72px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "80px",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.4))",
            }}
          />
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.35em",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}
          >
            Why Panamera
          </span>
          <div
            style={{
              flex: 1,
              maxWidth: "80px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)",
            }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 400,
            color: "#F5F5F0",
            letterSpacing: "-0.01em",
            marginBottom: "12px",
          }}
        >
          The Panamera Promise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "clamp(14px, 1.8vw, 18px)",
            color: "rgba(201,168,76,0.55)",
            direction: "rtl",
          }}
        >
          وعد بانميرا — الفخامة بلا مساومة
        </motion.p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
        className="features-grid"
      >
        {features.map((feat, i) => (
          <FeatureCard key={i} feat={feat} index={i} globalInView={inView} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
