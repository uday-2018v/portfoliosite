// src/components/Skills.jsx
import React from "react";

const skills = [
  { name: "React", level: "Expert" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Git & GitHub", level: "Expert" },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-300" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div
                  className={`bg-emerald-500 h-3 rounded-full`}
                  style={{
                    width:
                      skill.level === "Expert"
                        ? "100%"
                        : skill.level === "Intermediate"
                        ? "70%"
                        : "50%",
                  }}
                ></div>
              </div>
              <p className="text-gray-600 mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}