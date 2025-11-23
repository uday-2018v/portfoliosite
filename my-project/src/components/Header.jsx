// Header.jsx
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Header() {
  return (
    <header className=" text-white border border-b-4 shadow-md">
            <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wider">
          MyPortfolio
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-lg font-medium">
          <a href="#home" className="hover:text-green-300 transition">Home</a>
          <a href="#about" className="hover:text-green-300 transition">About</a>
          <a href="#projects" className="hover:text-green-300 transition">Projects</a>
          <a href="#contact" className="hover:text-green-300 transition">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
