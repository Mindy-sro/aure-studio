import React from "react";

// Official SVG logo — dark text on transparent background
const LOGO_SVG = "/images/056dab230_aure-studio-logo-transparent.svg";

export default function Logo({ className = "", height = "2.5rem", dark = false }) {
  return (
    <img
      src={LOGO_SVG}
      alt="AURE Studio"
      style={{
        height,
        width: "auto",
        display: "block",
        // On dark backgrounds: invert dark text to white
        filter: dark
          ? "invert(1) brightness(1.35) contrast(1.12) drop-shadow(0 2px 12px rgba(0,0,0,0.55))"
          : "none",
      }}
      className={className}
    />
  );
}