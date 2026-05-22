import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Machine Learning', icon: 'logos:tensorflow' },
   { name: 'Python', icon: 'logos:python' },
  { name: 'Pandas', icon: 'logos:pandas' },
  { name: 'NumPy', icon: 'logos:numpy' },
  { name: 'Scikit-learn', icon: 'logos:scikit-learn' },
  { name: 'Git', icon: 'logos:git-icon' },
  { name: 'GitHub', icon: 'logos:github-icon' },
  { name: 'VS Code', icon: 'logos:visual-studio-code' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Vercel', icon: 'logos:vercel-icon' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-4">
            Technical Skills
            <span className="h-px bg-slate-800 flex-grow ml-4"></span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-slate-800 group-hover:bg-purple-900/30 flex items-center justify-center mb-4 transition-colors">
                <span className="text-purple-400 font-bold text-xl">{skill.name.charAt(0)}</span>
              </div>
              <h3 className="text-slate-200 font-medium">{skill.name}</h3>
              <p className="text-slate-500 text-sm mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
