// App.jsx
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
