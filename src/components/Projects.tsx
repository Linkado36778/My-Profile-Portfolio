import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Github, Folder } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full flex flex-col gap-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-sky-400 font-mono text-xl mr-2">06.</span> Some Things I've Built
        </h2>
        <div className="h-px bg-slate-700 w-full md:w-64 flex-grow md:flex-grow-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col justify-between h-full bg-slate-800 p-8 rounded-xl border border-slate-700 shadow-xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <Folder className="text-sky-400" size={40} />
                <div className="flex gap-4 items-center">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors">
                      <Github size={22} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-4 border-t border-slate-700/50">
              {project.technologies.map(tech => (
                <li key={tech} className="font-mono text-xs text-slate-500">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
