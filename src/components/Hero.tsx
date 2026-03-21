import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import profile from '../assets/images/lucas_profile.jpeg';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] w-full mt-10 gap-12">
      <div className="flex flex-col items-start justify-center w-full md:w-3/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sky-400 font-mono text-lg mb-4">Hi, my name is</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            Lucas Barbosa Pereira.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 tracking-tight">
            I build things for the web and hardware.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            I'm a Computer Engineering student specializing in building exceptional digital experiences,
            embedded systems, and IoT solutions. Currently, I'm focused on combining software and hardware
            to create impactful real-world applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          <a
            href="mailto:barbosaa_lucas@hotmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-sky-500/10 text-sky-400 border border-sky-400/50 rounded-lg hover:bg-sky-500/20 transition-colors font-medium"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>

          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/Linkado36778" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/lucas-barbosa-pereira-27b087264" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full md:w-2/5 flex justify-center md:justify-end mt-12 md:mt-0"
      >
        <div className="relative group w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-sky-400 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          <img
            src={profile}
            alt="Lucas Barbosa Pereira"
            className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-sky-400/30 grayscale hover:grayscale-0 transition-all duration-300 shadow-2xl"
          />
        </div>
      </motion.div>
    </section>
  );
}
