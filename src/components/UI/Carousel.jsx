import { useState, useEffect, useRef } from "react";

const slides = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
];

export default function Carousel() {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ];

  // =========================
  // Auto Slide Controls
  // =========================

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 1000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // =========================
  // Browser Tab Visibility Fix
  // =========================

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    };

    startAutoSlide();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoSlide();
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, []);

  // =========================
  // Infinite Loop Fix
  // =========================

  const handleTransitionEnd = () => {
    if (current === extendedSlides.length - 1) {
      setTransition(false);
      setCurrent(1);
    }

    if (current === 0) {
      setTransition(false);
      setCurrent(extendedSlides.length - 2);
    }
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  // =========================
  // Navigation
  // =========================

  const nextSlide = () => setCurrent((prev) => prev + 1);
  const prevSlide = () => setCurrent((prev) => prev - 1);

  // =========================
  // Swipe Support (Mobile)
  // =========================

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextSlide(); // Swipe left
    }

    if (distance < -50) {
      prevSlide(); // Swipe right
    }
  };

  // Real index for pagination
  const realIndex =
    current === 0
      ? slides.length - 1
      : current === extendedSlides.length - 1
      ? 0
      : current - 1;

  return (
    <div
      className="relative w-full h-[400px] overflow-hidden"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${
          transition ? "transition-transform duration-700 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {extendedSlides.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={`${img}?auto=format&fit=crop&w=1600&q=80`}
              className="w-full h-[400px] object-cover"
              alt="slide"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 
                   bg-black/60 hover:bg-black text-white 
                   w-12 h-12 flex items-center justify-center 
                   rounded-full text-2xl transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 
                   bg-black/60 hover:bg-black text-white 
                   w-12 h-12 flex items-center justify-center 
                   rounded-full text-2xl transition"
      >
        ›
      </button>

      {/* Pagination Lines */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index + 1)}
            className={`h-1 w-10 cursor-pointer transition-all duration-300 ${
              realIndex === index
                ? "bg-orange-400"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
