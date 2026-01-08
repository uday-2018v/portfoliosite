// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind CSS showcasing my projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/uday-2018v/portfolio",
    live: "#",
    image: "./images/portfolio.png",
  },
  {
    title: "E-commerce App",
    description: "An e-commerce application with cart, product listing, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/uday-2018v/ecommerce-app",
    live: "#",
    image: "/images/bussiness.png",
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with rooms, authentication and messaging features.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/uday-2018v/chat-app",
    live: "#",
    image: "/images/about.png",
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-300" id="projects ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-white bg-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
