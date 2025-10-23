import { useState } from "react";
import Hero from "@/components/Hero";
import Objectives from "@/components/Objectives";
import Itinerary from "@/components/Itinerary";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import AutumnLeaves from "@/components/AutumnLeaves";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);

  if (showLoader) {
    return <Loader onComplete={() => setShowLoader(false)} />;
  }

  return (
    <main className="min-h-screen relative">
      <AutumnLeaves />
      <Hero />
      <Itinerary />
      <Objectives />
      <Footer />
    </main>
  );
};

export default Index;
