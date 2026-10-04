import React from "react";
import Navbar from "@/components/aure/Navbar";
import Hero from "@/components/aure/Hero";
import Services from "@/components/aure/Services";
import Portfolio from "@/components/aure/Portfolio";
import About from "@/components/aure/About";
import Booking from "@/components/aure/Booking";
import Footer from "@/components/aure/Footer";

export default function Home() {
  const heroImage = "/images/manikura-burgundy.png";
  const macroNail = "/images/macro-burgundy-soft.png";
  const handPose = "/images/a4bad5fdc_generated_1e383c9d.png";
  const portfolioImages = [macroNail, handPose, macroNail, handPose, macroNail, handPose];
  const serviceImages = [
    "/images/a9337d5d8_generated_image.png",
    "/images/4b8759258_generated_image.png",
    "/images/e10633633_generated_image.png"
  ];
  const interiorImage = "/images/aure-studio-real.jpeg";
  const atmosphereImage = "/images/abstract-purple-greige.png";

  return (
    <div className="aure-home bg-[hsl(var(--chrome))]">
      <Navbar />
      <Hero heroImage={heroImage} />
      <Services portfolioImages={serviceImages} />
      <Portfolio portfolioImages={[
        "/images/manikura-burgundy.png",
        "/images/macro-burgundy-stamped.png",
        "/images/a4bad5fdc_generated_1e383c9d.png"
      ]} />
      <About interiorImage={interiorImage} atmosphereImage={atmosphereImage} />
      <Booking />
      <Footer />
    </div>
  );
}
