import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";

interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  km: string;
  price: string;
  badge?: string;
  image: string;
  featured?: boolean;
}

const cars: Car[] = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "G 63 AMG",
    year: 2023,
    km: "12,000",
    price: "750,000",
    badge: "HOT DEAL",
    featured: true,
    image: "https://images.unsplash.com/photo-1776102669015-21d5f6c0cdf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBkYXJrJTIwZHJhbWF0aWMlMjBzaG93cm9vbXxlbnwxfHx8fDE3ODA1NzE2ODV8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 2,
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2022,
    km: "8,500",
    price: "1,200,000",
    badge: "EXCLUSIVE",
    image: "https://images.unsplash.com/photo-1657769106786-b6f50ac90f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW1ib3JnaGluaSUyMGx1eHVyeSUyMGNhciUyMG5pZ2h0JTIwZGFya3xlbnwxfHx8fDE3ODA1NzE2OTF8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 3,
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2022,
    km: "15,200",
    price: "820,000",
    image: "https://images.unsplash.com/photo-1770608014330-7de6ce86c69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxQb3JzY2hlJTIwc3BvcnRzJTIwY2FyJTIwZGFyayUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3ODA1NzE2OTJ8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 4,
    brand: "BMW",
    model: "X7 M60i",
    year: 2023,
    km: "19,000",
    price: "480,000",
    badge: "NEW IN",
    image: "https://images.unsplash.com/photo-1516610540415-d1b25463c7f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBTVVYlMjBsdXh1cnklMjBibGFjayUyMGF1dG9tb3RpdmV8ZW58MXx8fHwxNzgwNTcxNjk4fDA&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 5,
    brand: "Range Rover",
    model: "Autobiography LWB",
    year: 2023,
    km: "22,000",
    price: "580,000",
    image: "https://images.unsplash.com/photo-1646654184457-cd64cadcd3a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxSYW5nZSUyMFJvdmVyJTIwbHV4dXJ5JTIwU1VWJTIwZHJhbWF0aWMlMjBkYXJrfGVufDF8fHx8MTc4MDU3MTY5OHww&ixlib=rb-4.1.0&q=80&w=800",
  },
  {
    id: 6,
    brand: "Audi",
    model: "RS Q8",
    year: 2022,
    km: "28,000",
    price: "420,000",
    image: "https://images.unsplash.com/photo-1555652736-e92021d28a10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxBdWRpJTIwbHV4dXJ5JTIwc2VkYW4lMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3ODA1NzE2OTl8MA&ixlib=rb-4.1.0&q=80&w=800",
  },
];

function CarCard({ car, index, large = false }: { car: Car; index: number; large?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ gridRow: large ? "span 2" : "span 1" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          height: "100%",
          minHeight: large ? "560px" : "280px",
          position: "relative",
          overflow: "hidden",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${hovered ? "rgba(201,168,76,0.45)" : "rgba(201,168,76,0.12)"}`,
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.01 : 1})`,
          transition: "transform 0.25s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: hovered
            ? "0 24px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.12)"
            : "0 8px 32px rgba(0,0,0,0.4)",
          cursor: "none",
        }}
      >
        {/* Car image */}
        <div style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}>
          <img
            src={car.image}
            alt={`${car.brand} ${car.model}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              transform: `scale(${hovered ? 1.07 : 1})`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 40%, rgba(5,5,5,0.1) 70%, transparent 100%)",
          }} />
          {hovered && (
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.06) 0%, transparent 70%)",
              transition: "opacity 0.3s ease",
            }} />
          )}
        </div>

        {/* Badge */}
        {car.badge && (
          <div style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "linear-gradient(135deg, #C9A84C, #FFD700)",
            color: "#050505",
            fontFamily: "'Jost', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            padding: "5px 10px",
            zIndex: 3,
          }}>
            {car.badge}
          </div>
        )}

        {/* Content */}
        <div style={{
          position: "absolute",
          bottom: 0, left: 0, right: 0,
          padding: large ? "28px 28px" : "20px 20px",
          zIndex: 2,
        }}>
          <div style={{ marginBottom: "4px" }}>
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "#C9A84C",
              textTransform: "uppercase",
            }}>
              {car.brand}
            </span>
          </div>

          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "12px",
            flexWrap: "wrap",
            gap: "8px",
          }}>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: large ? "clamp(20px, 2.5vw, 28px)" : "clamp(16px, 2vw, 20px)",
              fontWeight: 500,
              color: "#F5F5F0",
              letterSpacing: "0.02em",
              margin: 0,
            }}>
              {car.model}
            </h3>
            <div style={{
              background: "rgba(201,168,76,0.1)",
              border: "1px solid rgba(201,168,76,0.3)",
              padding: "4px 10px",
            }}>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "rgba(201,168,76,0.7)",
              }}>
                AED{" "}
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                color: "#FFD700",
                fontWeight: 600,
              }}>
                {car.price}
              </span>
            </div>
          </div>

          {/* Specs row */}
          <div style={{
            display: "flex",
            gap: "20px",
            marginBottom: "16px",
          }}>
            {[
              { label: "Year", value: car.year.toString() },
              { label: "KM", value: car.km },
            ].map((spec) => (
              <div key={spec.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "9px", color: "rgba(245,245,240,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {spec.label}
                </span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "12px", color: "rgba(245,245,240,0.8)", fontWeight: 500 }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{
            height: "1px",
            background: hovered
              ? "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)"
              : "rgba(255,255,255,0.06)",
            marginBottom: "14px",
            transition: "background 0.3s ease",
          }} />

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/971501234567?text=I'm interested in the ${car.year} ${car.brand} ${car.model} (AED ${car.price})`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "11px 0",
              background: "transparent",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#C9A84C",
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(201,168,76,0.1)";
              el.style.borderColor = "#C9A84C";
              el.style.color = "#FFD700";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(201,168,76,0.3)";
              el.style.color = "#C9A84C";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.09.541 4.05 1.487 5.757L.057 23.882l6.294-1.652A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.922 0-3.73-.504-5.29-1.385l-.38-.226-3.937 1.034 1.053-3.85-.247-.397A9.97 9.97 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedCars() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="collection" style={{ padding: "100px clamp(20px, 5vw, 80px)", background: "#050505" }}>
      {/* Section header */}
      <div ref={titleRef} style={{ textAlign: "center", marginBottom: "64px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "16px",
          }}
        >
          <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4))" }} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "0.35em", color: "#C9A84C", textTransform: "uppercase" }}>
            Our Collection
          </span>
          <div style={{ flex: 1, maxWidth: "80px", height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)" }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 52px)",
            fontWeight: 400,
            color: "#F5F5F0",
            marginBottom: "12px",
            letterSpacing: "-0.01em",
          }}
        >
          Featured Vehicles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(15px, 1.8vw, 18px)",
            color: "rgba(245,245,240,0.45)",
            fontStyle: "italic",
          }}
        >
          Hand-picked excellence. Every vehicle personally inspected and verified.
        </motion.p>
      </div>

      {/* Asymmetric grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "auto",
        gap: "16px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
        className="cars-grid"
      >
        {cars.map((car, i) => (
          <CarCard key={car.id} car={car} index={i} large={i === 0} />
        ))}
      </div>

      {/* View all CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginTop: "56px" }}
      >
        <a
          href="https://wa.me/971501234567?text=I'd like to see your full car collection"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            padding: "16px 44px",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "rgba(245,245,240,0.6)",
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "#C9A84C";
            el.style.borderColor = "rgba(201,168,76,0.5)";
            el.style.background = "rgba(201,168,76,0.04)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "rgba(245,245,240,0.6)";
            el.style.borderColor = "rgba(201,168,76,0.3)";
            el.style.background = "transparent";
          }}
        >
          View Full Collection on WhatsApp
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .cars-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 580px) {
          .cars-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
