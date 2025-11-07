import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Video Storyboarder',
    desc: 'Turn concepts into animated storyboards using LLM prompts and scene graphs.',
    tags: ['Next.js', 'LLM', 'OpenAI', 'Framer Motion'],
    links: { live: '#', code: '#' },
  },
  {
    title: 'RAG Playground',
    desc: 'Interactive retrieval experiments with embeddings, chunking, and evaluation.',
    tags: ['FastAPI', 'React', 'Pinecone', 'LangChain'],
    links: { live: '#', code: '#' },
  },
  {
    title: 'Generative UI Kit',
    desc: 'Composable components that morph with text prompts and user intent.',
    tags: ['Vite', 'Tailwind', 'AI'],
    links: { live: '#', code: '#' },
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-inset ring-white/10">{children}</span>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05, duration: 0.6 }}
    className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6 backdrop-blur-sm"
  >
    <div>
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
    <div className="mt-6 flex items-center gap-3">
      <a href={project.links.live} className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200">
        <ExternalLink className="h-4 w-4" /> Live
      </a>
      <a href={project.links.code} className="inline-flex items-center gap-1 text-slate-300 hover:text-white">
        <Github className="h-4 w-4" /> Code
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
