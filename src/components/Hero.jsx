import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for the background elements
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero"
    >
      {/* Parallax Background Blobs */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ y: yBg }}
        className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-600/20 rounded-full blur-[120px]"
      />

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-purple-300 text-sm font-medium mb-6">
            Available for new opportunities
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Swaritha Yelamanchili</span>
            <br />
            AI&ML engineer.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Developing intelligent real-time ML systems that combine strong architecture with data-driven insights to enhance user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a 
  href="/resumeee.pdf"
  download
  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium transition-colors border border-slate-700 flex items-center justify-center gap-2"
>
  <Download size={20} />
  Resume
</a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
