import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Brain } from 'lucide-react';

const SkillTag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{children}</span>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          About
        </motion.h2>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-4 text-slate-200"
          >
            <p>
              I’m an AI content creator and educator passionate about building playful, interactive experiences. My work blends full‑stack engineering with creative storytelling to make AI approachable and exciting.
            </p>
            <p>
              I teach concepts through hands‑on projects, visual demos, and real products — sharing everything from model intuition to production deployment.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <SkillTag>Generative AI</SkillTag>
              <SkillTag>LLMs</SkillTag>
              <SkillTag>Retrieval</SkillTag>
              <SkillTag>FastAPI</SkillTag>
              <SkillTag>React</SkillTag>
              <SkillTag>Vite</SkillTag>
              <SkillTag>Tailwind</SkillTag>
              <SkillTag>Vector Search</SkillTag>
              <SkillTag>MLOps</SkillTag>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.05] p-5 backdrop-blur">
              <Brain className="h-6 w-6 text-teal-300" />
              <p className="mt-2 text-sm text-slate-300">AI Storytelling</p>
              <p className="text-xs text-slate-400">Interactive narratives that teach</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.05] p-5 backdrop-blur">
              <Code2 className="h-6 w-6 text-teal-300" />
              <p className="mt-2 text-sm text-slate-300">Full‑stack</p>
              <p className="text-xs text-slate-400">From idea to live app</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.05] p-5 backdrop-blur">
              <GraduationCap className="h-6 w-6 text-teal-300" />
              <p className="mt-2 text-sm text-slate-300">Education</p>
              <p className="text-xs text-slate-400">Workshops & courses</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
