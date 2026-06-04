import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 9000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipVisible && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  background: "rgba(5,5,5,0.97)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  padding: "12px 16px",
                  backdropFilter: "blur(12px)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#F5F5F0",
                    letterSpacing: "0.08em",
                    marginBottom: "3px",
                  }}
                >
                  Chat with us instantly
                </div>
                <div
                  style={{
                    fontFamily: "'Tajawal', sans-serif",
                    fontSize: "11px",
                    color: "rgba(201,168,76,0.6)",
                    direction: "rtl",
                  }}
                >
                  تحدث معنا الآن
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://wa.me/971501234567?text=Hello! I'd like to know more about your cars."
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => { setHovered(true); setTooltipVisible(true); }}
            onMouseLeave={() => { setHovered(false); setTooltipVisible(false); }}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              animation: "whatsappPulse 2.5s ease-out infinite",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              filter: hovered ? "brightness(1.1)" : "brightness(1)",
              transition: "transform 0.2s ease, filter 0.2s ease",
              cursor: "none",
              flexShrink: 0,
              boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
