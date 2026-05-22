import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Automated Attendance System',
    description: 'Created an attendance system using face recognition to automate classroom attendance. The system captures faces through a webcam and marks presence in real time. Improved efficiency and reduced manual errors.',
    tech: ['Python','OpenCV','Face Recognition','Flask','ReactJS','MongoDB'],
    github: 'https://github.com/thulasisadhvi/attendence',
    live: 'https://attendence-mu.vercel.app/'
  },
  {
    title: 'Fair Pricing For Farmers',
    description: 'Built a fair price prediction system for farmers to ensure transparent and equitable crop pricing. Developed and trained the machine learning model using historical data, contributing to agricultural support.',
    tech: ['Machine Learning','Python','Flask','Data Analysis','HTML','CSS','JavaScript','PHP'],
    github: 'https://github.com/sai1432-ss/SrkrHackathon',
  },
  {
    title: 'Image classifier',
    description: 'This project implements an end-to-end image classification pipeline using transfer learning with a pre-trained ResNet50 model. It covers the complete ML workflow from dataset preparation to production deployment.',
    tech: ['ResNet50 ',
	'PyTorch','REST API','Python'],
    github: 'https://github.com/swaritha/image_clasf',
   
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white flex items-center gap-4">
            Some Things I've Built
            <span className="h-px bg-slate-800 flex-grow ml-4"></span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="bg-slate-950 rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 transition-all hover:-translate-y-2 flex flex-col h-full group"
            >
              <div className="flex justify-between items-center mb-8">
                <Folder className="text-purple-500 w-10 h-10" />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                    <Code2 size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <ul className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-slate-500">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
