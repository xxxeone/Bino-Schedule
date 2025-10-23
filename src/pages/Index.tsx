import { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Itinerary from "@/components/Itinerary";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import AutumnLeaves from "@/components/AutumnLeaves";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  
  const heroRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const objectivesRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showLoader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [heroRef, itineraryRef, objectivesRef, footerRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [showLoader]);

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <main className="min-h-screen relative">
      <AutumnLeaves />
      <div
        ref={heroRef}
        id="hero"
        className={`transition-all duration-1000 ${
          visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ opacity: visibleSections.size === 0 ? 1 : undefined }}
      >
        <Hero />
      </div>
      <div
        ref={itineraryRef}
        id="itinerary"
        className={`transition-all duration-1000 delay-150 ${
          visibleSections.has("itinerary") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
        style={{ opacity: visibleSections.size === 0 ? 1 : undefined }}
      >
        <Itinerary />
      </div>
      <div
        ref={objectivesRef}
        id="objectives"
        className={`transition-all duration-1000 delay-300 ${
          visibleSections.has("objectives") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
        style={{ opacity: visibleSections.size === 0 ? 1 : undefined }}
      >
        <Objectives />
      </div>
      <div
        ref={footerRef}
        id="footer"
        className={`transition-all duration-1000 delay-450 ${
          visibleSections.has("footer") ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ opacity: visibleSections.size === 0 ? 1 : undefined }}
      >
        <Footer />
      </div>
    </main>
  );
};

export default Index;
