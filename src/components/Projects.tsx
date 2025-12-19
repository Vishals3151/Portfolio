import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Define broad categories as requested
  const categories = ['All', 'Web App', 'Android App'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Showcasing some of the impactful applications and solutions I've built.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Updated image container with aspect-video for consistent aspect ratio */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     {project.demoUrl && (
                       <a href={project.demoUrl} className="p-2 bg-white rounded-full text-slate-900 hover:bg-primary hover:text-white transition-colors" title="View Demo">
                         <ExternalLink size={20} />
                       </a>
                     )}
                     {project.repoUrl && (
                       <a href={project.repoUrl} className="p-2 bg-slate-900 rounded-full text-white border border-slate-600 hover:border-primary hover:text-primary transition-colors" title="View Code">
                         <Github size={20} />
                       </a>
                     )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md border border-slate-600">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-700/50 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;