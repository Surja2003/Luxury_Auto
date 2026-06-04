import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: "0 clamp(20px, 5vw, 80px)",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(5,5,5,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.12)"
          : "none",
        transition: "background 0.4s ease, border-color 0.4s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(14px, 2vw, 18px)",
            letterSpacing: "0.2em",
            background: "linear-gradient(135deg, #C9A84C, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 500,
          }}>
            PANAMERA
          </span>
          <span style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "clamp(10px, 1.2vw, 13px)",
            color: "rgba(201,168,76,0.6)",
            letterSpacing: "0.1em",
            direction: "rtl",
          }}>
            بانميرا موتورز
          </span>
        </div>
      </a>

      {/* Desktop links */}
      <div style={{
        display: "flex",
        gap: "40px",
        alignItems: "center",
      }}
        className="hidden-mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "rgba(245,245,240,0.7)",
              textTransform: "uppercase",
              position: "relative",
              paddingBottom: "4px",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#C9A84C";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "rgba(245,245,240,0.7)";
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.18em",
            padding: "9px 22px",
            border: "1px solid rgba(201,168,76,0.5)",
            color: "#C9A84C",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "rgba(201,168,76,0.1)";
            el.style.borderColor = "#FFD700";
            el.style.color = "#FFD700";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(201,168,76,0.5)";
            el.style.color = "#C9A84C";
          }}
        >
          WhatsApp
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "none",
          padding: "8px",
          display: "none",
        }}
        className="show-mobile"
        aria-label="Menu"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0, 1, 2].map((i) => (
            <div key={i} style={{
              width: "24px",
              height: "1px",
              background: "#C9A84C",
              transform: menuOpen && i === 0 ? "rotate(45deg) translateY(6px)" :
                         menuOpen && i === 2 ? "rotate(-45deg) translateY(-6px)" :
                         menuOpen && i === 1 ? "scaleX(0)" : "none",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(5,5,5,0.98)",
            backdropFilter: "blur(20px)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderBottom: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.2em",
                color: "rgba(245,245,240,0.8)",
                textTransform: "uppercase",
                padding: "8px 0",
                borderBottom: "1px solid rgba(201,168,76,0.08)",
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
