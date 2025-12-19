import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Clock, 
  Users, 
  Ear,
  Server,
  Layers,
  BookOpen,
  Wrench
} from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Helper to get fallback icons for items without images
  const getFallbackIcon = (name: string) => {
    const iconProps = { size: 18, className: "text-primary" };
    const lowerName = name.toLowerCase();

    if (lowerName.includes('structure') || lowerName.includes('algorithm')) return <Code {...iconProps} />;
    if (lowerName.includes('operating')) return <Cpu {...iconProps} />;
    if (lowerName.includes('network')) return <Globe {...iconProps} />;
    if (lowerName.includes('dbms') || lowerName.includes('database')) return <Database {...iconProps} />;
    if (lowerName.includes('oops')) return <Layers {...iconProps} />;
    if (lowerName.includes('full-stack')) return <Server {...iconProps} />;
    if (lowerName.includes('time')) return <Clock {...iconProps} />;
    if (lowerName.includes('teamwork')) return <Users {...iconProps} />;
    if (lowerName.includes('listening')) return <Ear {...iconProps} />;
    if (lowerName.includes('api')) return <Terminal {...iconProps} />;
    
    return <BookOpen {...iconProps} />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-900/50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are some of my skills on which I have been working on for the past 2 years.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SKILLS.map((category) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-center text-slate-200 mb-8">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-xl hover:border-primary/50 hover:bg-slate-800 transition-colors"
                  >
                    {skill.image ? (
                      <div className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-full p-0.5">
                         <img 
                           src={skill.image} 
                           alt={skill.name} 
                           className="w-full h-full object-contain"
                           onError={(e) => {
                             // Fallback if image fails to load
                             e.currentTarget.style.display = 'none';
                             e.currentTarget.parentElement?.classList.add('hidden');
                           }}
                         />
                      </div>
                    ) : (
                      getFallbackIcon(skill.name)
                    )}
                    <span className="text-slate-300 font-medium text-sm md:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;