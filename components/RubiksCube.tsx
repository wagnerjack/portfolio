"use client";

import { useState, useEffect } from "react";

const face = (transform: string) => (
  <div
    style={{
      position: "absolute",
      width: 130,
      height: 130,
      backgroundColor: "#111",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 4,
      padding: 4,
      boxSizing: "border-box",
      transform,
    }}
  >
    {Array.from({ length: 9 }).map((_, i) => (
      <div key={i} style={{ backgroundColor: "#fff", borderRadius: 2 }} />
    ))}
  </div>
);

export default function RubiksCube() {
  const [rotY, setRotY] = useState(30);

  useEffect(() => {
    const onScroll = () => setRotY(30 + window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{ perspective: 600 }}
      className="py-16 flex justify-center border-t border-[#e5e5e5]"
    >
      <div
        style={{
          width: 130,
          height: 130,
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(-20deg) rotateY(${rotY}deg)`,
          transition: "transform 0.08s ease-out",
        }}
      >
        {face("rotateY(0deg) translateZ(65px)")}
        {face("rotateY(180deg) translateZ(65px)")}
        {face("rotateY(90deg) translateZ(65px)")}
        {face("rotateY(-90deg) translateZ(65px)")}
        {face("rotateX(90deg) translateZ(65px)")}
        {face("rotateX(-90deg) translateZ(65px)")}
      </div>
    </div>
  );
}
