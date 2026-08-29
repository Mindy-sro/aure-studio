import React from "react";
import Navbar from "@/components/aure/Navbar";
import Hero from "@/components/aure/Hero";
import Services from "@/components/aure/Services";
import Portfolio from "@/components/aure/Portfolio";
import About from "@/components/aure/About";
import Booking from "@/components/aure/Booking";
import Footer from "@/components/aure/Footer";

export default function Home() {
  const heroImage = "/images/448077a68_generated_9b585d8f.png";
  const macroNail = "/images/44ae88ef3_generated_ca43b154.png";
  const handPose = "/images/a4bad5fdc_generated_1e383c9d.png";
  const portfolioImages = [macroNail, handPose, macroNail, handPose, macroNail, handPose];
  const serviceImages = [
    "/images/a9337d5d8_generated_image.png",
    "/images/4b8759258_generated_image.png",
    "/images/e10633633_generated_image.png"
  ];
  const interiorImage = "/images/1ba2fd0c9_generated_image.png";
  const atmosphereImage = "/images/2a15d8906_generated_11f5a36f.png";

  return (
    <div className="bg-[hsl(var(--chrome))]">
      <Navbar />
      <Hero heroImage={heroImage} />
      <Services portfolioImages={serviceImages} />
      <Portfolio portfolioImages={[
        "/images/bc01a3d96_generated_image.png",
        "/images/44ae88ef3_generated_ca43b154.png",
        "/images/a4bad5fdc_generated_1e383c9d.png"
      ]} />
      <About interiorImage={interiorImage} atmosphereImage={atmosphereImage} />
      <Booking />
      <Footer />
    </div>
  );
}