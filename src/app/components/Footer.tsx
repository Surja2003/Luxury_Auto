import { motion } from "motion/react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/panameramotor",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/971501234567",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@panameramotor",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer style={{
      background: "#030303",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      padding: "64px clamp(20px, 5vw, 80px) 32px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Top shimmer line */}
      <div aria-hidden style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "1px",
        overflow: "hidden",
      }}>
        <div style={{
          width: "30%",
          height: "100%",
          background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.4), transparent)",
          animation: "shimmerSweep 5s ease-in-out infinite",
        }} />
      </div>

      {/* Main footer grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "60px",
        maxWidth: "1300px",
        margin: "0 auto",
        marginBottom: "48px",
      }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 2vw, 22px)",
              letterSpacing: "0.2em",
              background: "linear-gradient(135deg, #C9A84C, #FFD700)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 500,
              marginBottom: "6px",
            }}>
              PANAMERA MOTORS
            </div>
            <div style={{
              fontFamily: "'Tajawal', sans-serif",
              fontSize: "14px",
              color: "rgba(201,168,76,0.5)",
              direction: "rtl",
            }}>
              بانميرا موتورز
            </div>
          </div>

          <div style={{
            width: "40px", height: "1px",
            background: "linear-gradient(90deg, #C9A84C, transparent)",
            marginBottom: "20px",
          }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(14px, 1.6vw, 16px)",
            color: "rgba(245,245,240,0.35)",
            lineHeight: 1.8,
            fontStyle: "italic",
            marginBottom: "12px",
            maxWidth: "360px",
          }}>
            "Where luxury meets the road — Abu Dhabi's premier destination for pre-owned prestige vehicles."
          </p>
          <p style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "13px",
            color: "rgba(201,168,76,0.35)",
            direction: "rtl",
            lineHeight: 1.7,
            maxWidth: "360px",
          }}>
            "حيث تلتقي الفخامة بالطريق — وجهتك الأولى للسيارات الفاخرة في أبوظبي"
          </p>
        </div>

        {/* Nav column */}
        <div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            Navigation
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  color: "rgba(245,245,240,0.35)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "color 0.3s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.35)")}
              >
                <span style={{ width: "8px", height: "1px", background: "rgba(201,168,76,0.3)" }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Social column */}
        <div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            color: "#C9A84C",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}>
            Follow Us
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "rgba(245,245,240,0.35)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,245,240,0.35)")}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>

          <div style={{
            marginTop: "32px",
            padding: "16px",
            border: "1px solid rgba(201,168,76,0.1)",
            background: "rgba(201,168,76,0.02)",
          }}>
            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", letterSpacing: "0.2em", color: "rgba(201,168,76,0.4)", textTransform: "uppercase", marginBottom: "8px" }}>
              Business Hours
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "rgba(245,245,240,0.5)", lineHeight: 1.7 }}>
              Sat – Thu: 9:00 AM – 9:00 PM
              <br />
              Friday: 2:00 PM – 9:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
        marginBottom: "28px",
      }} />

      {/* Bottom bar */}
      <div style={{
        maxWidth: "1300px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <div style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "rgba(245,245,240,0.2)",
        }}>
          © 2024 Panamera Motors. All rights reserved. · Abu Dhabi, UAE
        </div>
        <div style={{
          fontFamily: "'Tajawal', sans-serif",
          fontSize: "11px",
          color: "rgba(201,168,76,0.25)",
          direction: "rtl",
        }}>
          جميع الحقوق محفوظة — أبوظبي، الإمارات
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
