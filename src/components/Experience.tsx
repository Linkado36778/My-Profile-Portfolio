import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="w-full flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-sky-400 font-mono text-xl mr-2">03.</span> Where I've Worked
        </h2>
        <div className="h-px bg-slate-700 w-full md:w-64 flex-grow md:flex-grow-0"></div>
      </motion.div>

      <div className="flex flex-col gap-12 max-w-3xl ml-2 md:ml-4 border-l-2 border-slate-700/50">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 bg-slate-900 border-2 border-sky-400 rounded-full" />

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-200">
                {exp.role} <span className="text-sky-400">| {exp.company}</span>
              </h3>
              <p className="text-sm font-mono text-slate-400 mb-2">{exp.period}</p>
              <p className="text-slate-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
