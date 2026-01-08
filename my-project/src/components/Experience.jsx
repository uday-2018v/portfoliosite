// src/components/Experience.jsx
import React from "react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Solutions Pvt Ltd",
    duration: "Jan 2024 - May 2024",
    description: "Worked on building responsive web pages using React and Tailwind CSS. Collaborated with the design team to improve UX.",
  },
  {
    role: "Fullstack Developer Intern",
    company: "Web Innovations",
    duration: "Jun 2024 - Sep 2024",
    description: "Developed APIs using Node.js and integrated with frontend applications. Optimized database queries and improved performance.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gray-300" id="experience">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        <div className="relative border-l-2 border-emerald-500 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-emerald-500 rounded-full ring-4 ring-white text-white font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-gray-500">{exp.company} | {exp.duration}</span>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
