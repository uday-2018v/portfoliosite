import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 py-10 overflow-hidden">

      {/* Animated Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-500 animate-glowLine"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-white tracking-wide">Udayveer Singh</h3>

        <p className="mt-2 text-gray-400 text-sm">
          Developer • Designer • Dreamer
        </p>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-6 text-xl">
          <a href="https://github.com/uday-2018v" className="hover:text-white transition">GitHub</a>
          <a href="https://www.instagram.com/uvsk1303" className="hover:text-white transition">Instagram</a>
          <a href="https://www.linkedin.com/in/udayveer-singh13032003" className="hover:text-white transition">LinkedIn</a>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-gray-500 text-xs">
          © 2025 Udayveer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
