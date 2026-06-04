import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    id: 1,
    name: "Mohammed Al Rashidi",
    nameAr: "محمد الراشدي",
    title: "Business Owner, Abu Dhabi",
    stars: 5,
    text: "Bought a 2023 G63 from Panamera and the experience was flawless. Full transparency, no hidden fees. The car was exactly as described. Will never go anywhere else.",
    textAr: "اشتريت G63 من بانميرا والتجربة كانت مثالية. شفافية تامة ولا رسوم خفية.",
  },
  {
    id: 2,
    name: "Fatima Al Zaabi",
    nameAr: "فاطمة الزعابي",
    title: "Interior Designer, Dubai",
    stars: 5,
    text: "They found me my dream Range Rover Autobiography within 48 hours. The team was professional, responsive, and made the entire process effortless. 10/10.",
    textAr: "وجدوا لي سيارة أحلامي خلال 48 ساعة. فريق احترافي ومتجاوب للغاية.",
  },
  {
    id: 3,
    name: "Khalid Al Mansouri",
    nameAr: "خالد المنصوري",
    title: "Architect, Sharjah",
    stars: 5,
    text: "The WhatsApp support is a game changer. I viewed 12 cars, got full videos for all of them, and closed the deal on a Porsche 911 without even visiting. Incredible service.",
    textAr: "دعم واتساب مذهل. أغلقت الصفقة على بورش 911 دون زيارة. خدمة لا تصدق.",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    nameAr: "سارة تومبسون",
    title: "Marketing Director, Abu Dhabi",
    stars: 5,
    text: "As an expat in UAE, I was nervous about buying a used car. Panamera made it completely stress-free. The car inspection report was detailed and honest. Highly recommend.",
    textAr: "كمقيمة أجنبية في الإمارات، جعل بانميرا العملية خالية تمامًا من التوتر.",
  },
  {
    id: 5,
    name: "Omar Al Hamdan",
    nameAr: "عمر الحمدان",
    title: "Investor, Abu Dhabi",
    stars: 5,
    text: "Third purchase from Panamera. Every time the experience is better than before. Their pricing is transparent and the after-sales support is exceptional.",
    textAr: "شراءي الثالث من بانميرا. في كل مرة التجربة أفضل من السابقة.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFD700">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  active,
}: {
  testimonial: (typeof testimonials)[0];
  active: boolean;
}) {
  return (
    <div
      style={{
        padding: "36px 32px",
        background: active ? "rgba(201,168,76,0.03)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${active ? "rgba(201,168,76,0.25)" : "rgba(255,255,255,0.05)"}`,
        transition: "all 0.4s ease",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "80px",
          lineHeight: 0.8,
          color: "rgba(201,168,76,0.15)",
          marginBottom: "8px",
          fontWeight: 700,
        }}
      >
        "
      </div>

      <StarRating count={testimonial.stars} />

      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(15px, 1.6vw, 18px)",
          color: "rgba(245,245,240,0.75)",
          lineHeight: 1.7,
          fontStyle: "italic",
          flex: 1,
          marginBottom: "20px",
        }}
      >
        {testimonial.text}
      </p>

      <p
        style={{
          fontFamily: "'Tajawal', sans-serif",
          fontSize: "13px",
          color: "rgba(201,168,76,0.4)",
          direction: "rtl",
          marginBottom: "20px",
        }}
      >
        {testimonial.textAr}
      </p>

      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)",
          marginBottom: "16px",
        }}
      />

      <div>
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#F5F5F0",
            marginBottom: "4px",
          }}
        >
          {testimonial.name}
        </div>
        <div
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontSize: "12px",
            color: "rgba(201,168,76,0.5)",
            direction: "rtl",
            marginBottom: "4px",
          }}
        >
          {testimonial.nameAr}
        </div>
        <div
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "rgba(245,245,240,0.3)",
            textTransform: "uppercase",
          }}
        >
          {testimonial.title}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  /* manual autoplay */
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      emblaApi?.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      stopAutoplay();
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 0",
        background: "linear-gradient(180deg, #050505 0%, #070707 50%, #050505 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse, rgba(139,0,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          textAlign: "center",
          marginBottom: "60px",
          padding: "0 clamp(20px, 5vw, 80px)",
        }}
      >
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
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4))",
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
            Client Stories
          </span>
          <div
            style={{
              flex: 1,
              maxWidth: "80px",
              height: "1px",
              background: "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)",
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
          }}
        >
          What Our Clients Say
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 }}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div ref={emblaRef} style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              paddingLeft: "clamp(20px, 5vw, 80px)",
              paddingRight: "clamp(20px, 5vw, 80px)",
              cursor: "grab",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                style={{
                  flex: "0 0 clamp(280px, 38vw, 480px)",
                  minWidth: 0,
                }}
              >
                <TestimonialCard testimonial={t} active={i === selectedIndex} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Dot navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "40px",
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              emblaApi?.scrollTo(i);
              startAutoplay();
            }}
            style={{
              width: i === selectedIndex ? "24px" : "6px",
              height: "2px",
              background:
                i === selectedIndex
                  ? "linear-gradient(90deg, #C9A84C, #FFD700)"
                  : "rgba(201,168,76,0.25)",
              border: "none",
              cursor: "none",
              padding: 0,
              transition: "all 0.4s ease",
              borderRadius: "1px",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
