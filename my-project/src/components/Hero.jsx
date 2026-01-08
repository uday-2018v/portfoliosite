// src/components/Hero.jsx
import React from "react";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  return (
    <section className=" text-white min-h-[90vh] flex items-center">
            <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-2">
        
        {/* Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Udayveer Singh
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Fullstack Developer | Building responsive & modern web apps
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-[#C7F59E] text-black px-6 py-3 rounded-md font-semibold hover:bg-green-400 transition">
              Hire Me
            </a>
            <a href="./pdf/resumeudayveer.pdf" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
              Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="./images/photo2.jpg" alt="Udayveer Singh" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white" />
        </div>

      </div>
    </section>
  );
}