import { useRef } from "react";
import { motion, useInView } from "motion/react";

const contactDetails = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+971 50 123 4567",
    href: "https://wa.me/971501234567",
    color: "#25D366",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: "Phone",
    value: "+971 2 123 4567",
    href: "tel:+97121234567",
    color: "#C9A84C",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: "Location",
    value: "Al Nahyan, Abu Dhabi, UAE",
    href: "https://maps.google.com/?q=Al+Nahyan+Abu+Dhabi",
    color: "#C9A84C",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    label: "Instagram",
    value: "@panameramotor",
    href: "https://instagram.com/panameramotor",
    color: "#C9A84C",
  },
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contact"
      style={{
        padding: "100px clamp(20px, 5vw, 80px)",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #060606 0%, #080808 100%)",
      }}
    >
      {/* Gold glow bg */}
      <div aria-hidden style={{
        position: "absolute",
        top: "50%", right: "-100px",
        transform: "translateY(-50%)",
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute",
        bottom: 0, left: 0,
        width: "400px", height: "300px",
        background: "radial-gradient(ellipse, rgba(139,0,0,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div
        ref={ref}
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="contact-grid"
      >
        {/* Left — Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}
          >
            <div style={{ width: "40px", height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)" }} />
            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "0.35em", color: "#C9A84C", textTransform: "uppercase" }}>
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 400,
              color: "#F5F5F0",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Your Dream Car
            <br />
            <em style={{
              background: "linear-gradient(135deg, #C9A84C, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontStyle: "italic",
            }}>
              Awaits You
            </em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              fontFamily: "'Tajawal', sans-serif",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(201,168,76,0.55)",
              marginBottom: "16px",
              direction: "rtl",
              lineHeight: 1.7,
            }}
          >
            سيارة أحلامك في انتظارك — تواصل معنا الآن
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "14px",
              color: "rgba(245,245,240,0.4)",
              lineHeight: 1.8,
              fontWeight: 300,
              marginBottom: "40px",
            }}
          >
            Whether you're looking for a specific model or need guidance choosing your next
            luxury vehicle, our experts are ready to assist you — in English and Arabic, around the clock.
          </motion.p>

          {/* Big WhatsApp button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="https://wa.me/971501234567?text=Hello! I'm interested in viewing your car collection."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                padding: "18px 40px",
                background: "#25D366",
                color: "#fff",
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                animation: "whatsappPulse 2.5s ease-out infinite",
                transition: "transform 0.2s ease, filter 0.2s ease",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>

        {/* Right — Contact cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {contactDetails.map((detail, i) => (
            <motion.a
              key={i}
              href={detail.href}
              target={detail.href.startsWith("http") ? "_blank" : undefined}
              rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(201,168,76,0.1)",
                textDecoration: "none",
                color: "#F5F5F0",
                transition: "all 0.3s ease",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(201,168,76,0.04)";
                el.style.borderColor = "rgba(201,168,76,0.3)";
                el.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.borderColor = "rgba(201,168,76,0.1)";
                el.style.transform = "translateX(0)";
              }}
            >
              <div style={{
                width: "44px", height: "44px",
                border: "1px solid rgba(201,168,76,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: detail.color,
                flexShrink: 0,
              }}>
                {detail.icon}
              </div>
              <div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  color: "rgba(245,245,240,0.3)",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}>
                  {detail.label}
                </div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "16px",
                  color: "rgba(245,245,240,0.85)",
                  fontWeight: 500,
                }}>
                  {detail.value}
                </div>
              </div>
              <div style={{ marginLeft: "auto", color: "rgba(201,168,76,0.3)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
