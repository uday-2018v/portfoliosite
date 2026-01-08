// AnimatedBackground.jsx
import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">

      {/* Big Blurred Color Blob */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600 rounded-full mix-blend-screen filter blur-[150px] animate-pulse-slow"></div>

      {/* Pink Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600 rounded-full mix-blend-screen filter blur-[180px] animate-pulse-slow2"></div>

      {/* Glass Gradient Waves */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
    </div>
  );
}
