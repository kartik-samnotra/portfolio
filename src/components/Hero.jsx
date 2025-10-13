import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg"; // Replace with your image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-gray-50"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm Kartik
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-700">
          I build creative web experiences & portfolios
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
        >
          See My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
