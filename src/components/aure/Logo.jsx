import React from "react";

export default function Logo({ className = "", size = "2.5rem", dark = false }) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: `calc(${size} * 2.8)`,
        height: `calc(${size} * 1.65)`,
        overflow: "hidden",
        flexShrink: 0,
      }}>
      <img
        src={dark ? "/images/aure-logo-original-light.svg" : "/images/aure-logo-original-outlined.svg"}
        alt="AURE Studio"
        width={104}
        height={60}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: `calc(${size} * 2.8)`,
          maxWidth: "none",
          height: `calc(${size} * 1.65)`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </span>
  );
}
