import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (data.success) {
        alert("Message Sent Successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      setLoading(false);
      console.error("Network error:", err);
      alert("Network Error! Make sure backend is running.");
    }
  };

  return (
    <section className="py-20 bg-gray-300" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-gray-700">
              Feel free to reach out for collaborations or freelance work.
            </p>
            <p><span className="font-semibold">Email:</span> veerukalpi2018@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> 9335296725</p>
            <div className="flex gap-4 mt-4">
              <a href="https://github.com/uday-2018v" target="_blank" rel="noopener noreferrer" className="text-white bg-gray-800 px-4 py-2 rounded-md">GitHub</a>
              <a href="https://www.linkedin.com/in/udayveer-singh13032003" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 px-4 py-2 rounded-md">LinkedIn</a>
            </div>
          </div>
          {/* Form */}
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="border border-white px-4 py-2 rounded-md" required />
              <input type="email" placeholder="Your Email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="border border-white px-4 py-2 rounded-md" required />
              <textarea rows="5" placeholder="Your Message" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} className="border border-white px-4 py-2 rounded-md" required></textarea>
              <button type="submit" className="bg-emerald-500 text-white px-6 py-3 rounded-md font-semibold">{loading?"Sending...":"Send Message"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
