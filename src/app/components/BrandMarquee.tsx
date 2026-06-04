const brands = [
  "Mercedes-Benz",
  "BMW",
  "Land Rover",
  "GMC",
  "Porsche",
  "Audi",
  "Lexus",
  "Ferrari",
  "Lamborghini",
  "Bentley",
  "Rolls-Royce",
  "Maserati",
];

const DIAMOND = (
  <span style={{
    color: "#C9A84C",
    fontSize: "8px",
    verticalAlign: "middle",
    margin: "0 24px",
    opacity: 0.8,
  }}>◆</span>
);

export function BrandMarquee() {
  const doubled = [...brands, ...brands, ...brands, ...brands];

  return (
    <section style={{
      position: "relative",
      overflow: "hidden",
      background: "#050505",
      borderTop: "1px solid rgba(201,168,76,0.08)",
      borderBottom: "1px solid rgba(201,168,76,0.08)",
      padding: "22px 0",
    }}>
      {/* Fade edges */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(90deg, #050505, transparent)",
        pointerEvents: "none",
      }} />
      <div aria-hidden style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: "120px", zIndex: 2,
        background: "linear-gradient(270deg, #050505, transparent)",
        pointerEvents: "none",
      }} />

      {/* Shimmer sweep */}
      <div aria-hidden style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: "80px", zIndex: 1,
        background: "linear-gradient(90deg, transparent, rgba(255,215,0,0.06), transparent)",
        animation: "shimmerSweep 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      <div style={{
        display: "flex",
        width: "max-content",
        animation: "marqueeScroll 28s linear infinite",
        willChange: "transform",
      }}>
        {doubled.map((brand, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(13px, 1.8vw, 16px)",
              letterSpacing: "0.22em",
              color: "rgba(245,245,240,0.45)",
              textTransform: "uppercase",
              fontWeight: 300,
              transition: "color 0.3s ease",
            }}>
              {brand}
            </span>
            {DIAMOND}
          </span>
        ))}
      </div>
    </section>
  );
}
