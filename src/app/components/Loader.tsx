import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [lineComplete, setLineComplete] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLineComplete(true), 1200);
    const t2 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: lineComplete ? 1 : 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#050505",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: "40px",
      }}
    >
      {/* Gold line sweep */}
      <div style={{ width: "320px", height: "1px", background: "rgba(201,168,76,0.15)", position: "relative", overflow: "hidden" }}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, transparent, #C9A84C, #FFD700, #C9A84C, transparent)",
            position: "absolute", top: 0, left: 0,
          }}
        />
      </div>

      {/* Logo text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: lineComplete ? 1 : 0, y: lineComplete ? 0 : 12 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ textAlign: "center" }}
      >
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(22px, 4vw, 32px)",
          letterSpacing: "0.35em",
          fontWeight: 400,
          background: "linear-gradient(135deg, #C9A84C 0%, #FFD700 50%, #C9A84C 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textTransform: "uppercase",
        }}>
          PANAMERA MOTORS
        </div>
        <div style={{
          fontFamily: "'Tajawal', sans-serif",
          fontSize: "clamp(14px, 2vw, 18px)",
          color: "rgba(201,168,76,0.7)",
          letterSpacing: "0.15em",
          marginTop: "8px",
          direction: "rtl",
        }}>
          بانميرا موتورز
        </div>
        <div style={{
          width: "40px", height: "1px",
          background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
          margin: "16px auto 0",
        }} />
      </motion.div>

      {/* Progress dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: lineComplete ? 1 : 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ display: "flex", gap: "8px" }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            style={{
              width: "4px", height: "4px",
              borderRadius: "50%",
              background: "#C9A84C",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
