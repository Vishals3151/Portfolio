import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, ExternalLink, Calendar } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements & Awards</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Recognition for technical expertise, innovation, and community contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group relative overflow-hidden"
            >
              {/* Decorative background gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-yellow-500 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Trophy size={24} />
                  </div>
                  {achievement.url && (
                    <a 
                      href={achievement.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-primary transition-colors"
                      title="View Certificate/Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <div className="flex flex-col gap-1 mb-4">
                  <span className="text-base text-slate-300 font-medium flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    {achievement.issuer}
                  </span>
                  <span className="text-sm text-slate-500 flex items-center gap-2">
                    <Calendar size={14} />
                    {achievement.date}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;