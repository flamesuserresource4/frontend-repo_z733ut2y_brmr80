import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const FloatingBadge = ({ delay = 0, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: 'easeOut' }}
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-teal-200/90 backdrop-blur-md"
  >
    <Sparkles className="h-3.5 w-3.5 text-teal-300" />
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients & glows (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 sm:pt-32 md:px-8 lg:pt-40">
        {/* Top badges */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          <FloatingBadge delay={0.05}>Innovative AI storytelling</FloatingBadge>
          <FloatingBadge delay={0.15}>Educator • Full‑stack dev</FloatingBadge>
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl"
        >
          M Iqbal Fadilah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-center text-base text-slate-200 sm:text-lg"
        >
          AI content creator and educator crafting immersive demos, interactive lessons, and production‑grade apps. Blending code with narrative to make complex ideas feel simple.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-3 text-slate-900 transition hover:bg-teal-300"
          >
            View Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:border-white/25 hover:bg-white/15"
          >
            <Play className="h-4 w-4" />
            Explore Profile
          </a>
        </motion.div>

        {/* Glass stats card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-12 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
        >
          <div className="grid grid-cols-3 gap-4 text-center text-slate-200">
            <div>
              <p className="text-2xl font-semibold text-white">100+ </p>
              <p className="text-xs text-slate-300">Lessons & Talks</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">20</p>
              <p className="text-xs text-slate-300">Open‑source Repos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">50K+</p>
              <p className="text-xs text-slate-300">Learners Impacted</p>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex items-center gap-2 text-sm text-slate-300"
        >
          <div className="h-8 w-5 rounded-full border border-white/20 p-1">
            <motion.div
              className="h-2 w-2 rounded-full bg-white"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            />
          </div>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
