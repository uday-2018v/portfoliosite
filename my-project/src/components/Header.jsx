// Header.jsx
import React, { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="text-white border-b-4 shadow-md relative">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">MyPortfolio</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a href="#home" className="hover:text-green-300 transition">Home</a>
          <a href="#about" className="hover:text-green-300 transition">About</a>
          <a href="#projects" className="hover:text-green-300 transition">Projects</a>
          <a href="#contact" className="hover:text-green-300 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black/80 absolute w-full left-0 top-full px-6 py-4 flex flex-col gap-4 text-lg font-medium">
          <a href="#home" className="hover:text-green-300 transition" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-green-300 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" className="hover:text-green-300 transition" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-green-300 transition" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}
