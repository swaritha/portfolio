import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Image/Avatar */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-2xl transform rotate-6 opacity-50 blur-sm"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden z-10 flex items-center justify-center">
                 <img
  src="/pic4.jpg"
  alt="Swaritha"
  className="w-full h-full object-cover"
/>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white flex items-center gap-4">
              About Me
              <span className="h-px bg-slate-700 flex-grow ml-4"></span>
            </h2>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm an enthusiastic engineering student pursuing a B.Tech in Data Science at Aditya Engineering College with a strong foundation in artificial intelligence, machine learning, software engineering, and data analytics.
              </p>
              <p>
                I specialize in building end-to-end intelligent systems by combining predictive machine learning models with scalable and user-friendly applications. I enjoy bridging AI, data science, and software engineering to create practical solutions for real-world problems.
              </p>
              <p>
                Currently, I’m exploring advanced deep learning frameworks, computer vision, and intelligent automation while continuously improving my full-stack development skills. My goal is to engineer impactful AI-driven solutions that transform data into meaningful and seamless user experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
