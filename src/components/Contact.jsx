import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-purple-400 font-mono text-sm mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a 
            href="mailto:hello@example.com" 
            className="inline-block px-8 py-4 bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg font-medium transition-colors mb-16"
          >
            Say Hello
          </a>

          <div className="flex flex-col items-center gap-5">

  {/* Email */}
  <a
    href="mailto:yelamanchiliswaritha@gmail.com"
    className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors"
  >
    <Mail size={22} />
    <span className="text-base">
      yelamanchiliswaritha@gmail.com
    </span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/swaritha"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors"
  >
    <Code2 size={22} />
    <span className="text-base">
      github.com/swaritha
    </span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/swaritha-yelamanchili-33b175291"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-slate-400 hover:text-purple-400 transition-colors"
  >
    <Briefcase size={22} />
    <span className="text-base">
      linkedin.com/in/swaritha-yelamanchili-33b175291
    </span>
  </a>

</div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
