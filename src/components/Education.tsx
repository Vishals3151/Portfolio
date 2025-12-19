import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 w-0.5 bg-slate-700 transform -translate-x-1/2 origin-top"
            ></motion.div>

            {EDUCATION.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-slate-900 transform -translate-x-1/2 mt-1.5 z-10"
                ></motion.div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="ml-12 md:ml-0 md:w-1/2"
                >
                   <div className={`bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                     
                     {/* Metadata Row: Date & Place */}
                     <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-1.5 text-primary font-medium bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.place && (
                          <div className="flex items-center gap-1.5 text-slate-400 bg-slate-900/50 px-2.5 py-1 rounded-md border border-slate-700">
                            <MapPin size={14} />
                            <span>{edu.place}</span>
                          </div>
                        )}
                     </div>

                     <div className="flex items-start gap-4 mb-3">
                        <div className="mt-1 p-2 bg-slate-700/50 rounded-lg text-white border border-slate-600 shadow-inner shrink-0">
                            <GraduationCap size={20} />
                        </div>
                        <div className="flex-1">
                             <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                             <h4 className="text-lg text-slate-300 mt-1">{edu.institution}</h4>
                             
                             {edu.grade && (
                                <div className="inline-flex items-center gap-1.5 mt-2 text-emerald-400 text-sm font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                                   <Award size={14} />
                                   <span>Grade: {edu.grade}</span>
                                </div>
                             )}
                        </div>
                     </div>
                     
                     {edu.description && (
                        <p className="text-slate-400 text-sm leading-relaxed mt-4 border-t border-slate-700/50 pt-4">
                          {edu.description}
                        </p>
                     )}
                   </div>
                </motion.div>
                
                {/* Empty Space for Grid Alignment */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;