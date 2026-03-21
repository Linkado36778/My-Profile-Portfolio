import { motion } from 'framer-motion';
import { awards } from '../data/awards';
import { Trophy, ExternalLink } from 'lucide-react';

export default function Awards() {
  return (
    <section id="awards" className="w-full flex flex-col gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <h2 className="text-3xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-sky-400 font-mono text-xl mr-2">05.</span> Publications & Awards
        </h2>
        <div className="h-px bg-slate-700 w-full md:w-64 flex-grow md:flex-grow-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, idx) => (
          <motion.div
            key={award.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-start gap-5 bg-slate-800/20 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/40 transition-colors"
          >
            <div className="flex-shrink-0 mt-1">
              <Trophy className="text-yellow-500/80" size={28} />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-200">{award.title}</h3>
                  {award.link && (
                    <a
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                      aria-label={`Link to ${award.title}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
                <span className="px-3 py-1 bg-sky-500/10 text-sky-300 text-xs font-mono rounded-full self-start">
                  {award.year}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-300 mb-1">{award.event}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
