import React from "react";

export default function Logo({ className = "", size = "2.5rem", dark = false }) {
  return (
    <span
      role="img"
      aria-label="AURE Studio"
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "var(--font-logo)",
        fontWeight: 300,
        lineHeight: 1,
        whiteSpace: "nowrap",
        textShadow: dark ? "0 2px 12px rgba(0, 0, 0, 0.55)" : "none",
      }}>
      <span
        style={{
          fontSize: size,
          letterSpacing: "0.06em",
          marginRight: "-0.06em",
          color: dark ? "hsl(var(--chrome))" : "#2B2420",
        }}>
        aure
      </span>
      <span
        style={{
          fontSize: `calc(${size} * 0.3)`,
          letterSpacing: "0.3em",
          marginRight: "-0.3em",
          marginTop: "0.25em",
          color: dark ? "hsl(var(--chrome) / 0.72)" : "#8A7F72",
        }}>
        studio
      </span>
    </span>
  );
}
