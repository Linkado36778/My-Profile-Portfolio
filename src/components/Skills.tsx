import { motion } from 'framer-motion';
import { technicalSkills, professionalSkills } from '../data/skills';
import { CheckCircle2, Code2, Database, Wrench } from 'lucide-react';
import { SiC, SiCplusplus, SiPython, SiTypescript, SiJavascript } from 'react-icons/si';
import { TbCpu } from 'react-icons/tb';

export default function Skills() {
  const getCategoryIcon = (iconType?: string) => {
    switch(iconType) {
      case 'code':
        return <Code2 className="text-sky-400 mb-4" size={32} />;
      case 'database':
        return <Database className="text-sky-400 mb-4" size={32} />;
      case 'tool':
        return <Wrench className="text-sky-400 mb-4" size={32} />;
      default:
        return null;
    }
  };

  const getLanguageIcon = (skillName: string) => {
    switch(skillName) {
      case 'C': return <SiC size={28} />;
      case 'C++': return <SiCplusplus size={28} />;
      case 'Python': return <SiPython size={28} />;
      case 'TypeScript': return <SiTypescript size={28} />;
      case 'JavaScript': return <SiJavascript size={28} />;
      case 'Assembly': return <TbCpu size={28} />;
      default: return <span>{skillName}</span>;
    }
  };

  return (
    <section id="skills" className="w-full flex flex-col gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-sky-400 font-mono text-xl mr-2">02.</span> Skills & Expertise
        </h2>
        <div className="h-px bg-slate-700 w-full md:w-64 flex-grow md:flex-grow-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalSkills.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-sky-500/50 transition-colors flex flex-col items-center text-center"
          >
            {getCategoryIcon(category.icon)}
            <h3 className="text-xl font-semibold text-slate-200 mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.title === "Programming Languages" ? (
                category.skills.map(skill => (
                  <div
                    key={skill}
                    title={skill}
                    className="flex items-center justify-center p-3 bg-slate-900/80 text-sky-300 rounded-xl border border-slate-700/50 hover:border-sky-400 hover:text-sky-400 transition-colors shadow-sm"
                  >
                    {getLanguageIcon(skill)}
                  </div>
                ))
              ) : (
                category.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-900/80 text-sky-300 rounded-md text-sm font-medium border border-slate-700/50"
                  >
                    {skill}
                  </span>
                ))
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-4"
      >
        <h3 className="text-xl font-semibold text-slate-200 mb-6">Professional Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {professionalSkills.map((skill, idx) => (
            <li key={idx} className="flex items-center gap-3 text-slate-400">
              <CheckCircle2 size={18} className="text-sky-500" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
