// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Axis Institute of Technology and Management",
    duration: "2021 – 2025",
    cgpa: "7.5",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Dr. Ambedkar intercollege Ata, Jalaun",
    duration: "2019 – 2020",
    cgpa: "68%",
  },
   {
    degree: "Higher School (10th)",
    institution: "M.J.H intercollege Ata, Jalaun",
    duration: "2018 – 2019",
    cgpa: "85%",
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-300" id="education" >
      
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <span className="text-gray-500">{edu.institution} | {edu.duration}</span>
              <p className="mt-2 text-gray-700">CGPA: {edu.cgpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
