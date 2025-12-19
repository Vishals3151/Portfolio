import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{job.role}</h3>
                  <h4 className="text-lg text-primary font-medium">{job.company}</h4>
                </div>
              </div>

              <div className="mb-4">
                 <span className="inline-block px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 font-medium border border-slate-700">
                    {job.period}
                 </span>
              </div>

              <ul className="space-y-2 mt-2 flex-grow">
                {job.description.map((desc, i) => (
                  <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/50 rounded-full flex-shrink-0"></span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;