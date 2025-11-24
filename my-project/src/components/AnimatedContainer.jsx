// AnimatedBackground.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedContainer() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Gradient background animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(270deg, #d1fae5, #bfdbfe, #e9d5ff)",
            "linear-gradient(270deg, #ffe4e1, #c7f9cc, #d1c4e9)",
            "linear-gradient(270deg, #fef9c3, #bae6fd, #d1fae5)"
          ]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-60 h-60 bg-pink-300 rounded-full opacity-30"
        animate={{ x: [0, 400, 0], y: [0, 200, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-blue-300 rounded-full opacity-25"
        animate={{ x: [0, -300, 0], y: [0, -150, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
