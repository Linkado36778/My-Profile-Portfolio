import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-6"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-sky-400 font-mono text-xl mr-2">01.</span> About Me
        </h2>
        <div className="h-px bg-slate-700 w-full md:w-64 flex-grow md:flex-grow-0"></div>
      </div>

      <div className="text-slate-400 text-lg leading-relaxed flex flex-col gap-4 max-w-3xl">
        <p>
          Hello! I enjoy creating things that live on the internet and interact with the physical world.
          My interest in development started back when I began building custom circuits and found myself writing software
          to make them come alive.
        </p>
        <p>
          As a Computer Engineering student, I've had the privilege of working across multiple domains—from
          low-level <span className="text-sky-400">Linux kernel module drivers</span> and <span className="text-sky-400">IoT systems</span>,
          to <span className="text-sky-400">modern web applications</span>. My main focus these days is building
          accessible, inclusive products and digital experiences that bridge the gap between hardware and software.
        </p>
      </div>
    </motion.section>
  );
}
