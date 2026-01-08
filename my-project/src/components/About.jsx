

export default function About() {
  return (
    <section className="py-20 bg-gray-300" id="about">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img src="./images/Personal.jpg" alt="About Me" className="w-64 h-64 rounded-full object-cover shadow-lg" />
        </div>

        {/* Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="mb-4 text-gray-700">
            I am a passionate Fullstack Developer with a B.Tech in IT from Axis Institute of Technology and Management. I love building modern web applications using React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-gray-700">
            My goal is to create user-friendly, responsive, and visually appealing web apps that solve real-world problems. I enjoy learning new technologies and improving my skills every day.
          </p>
        </div>

      </div>
    </section>
  );
}