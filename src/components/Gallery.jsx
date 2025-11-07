import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop',
    title: 'Generative Patterns',
  },
  {
    src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1400&auto=format&fit=crop',
    title: 'Model Intuition',
  },
  {
    src: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1400&auto=format&fit=crop',
    title: 'Playful Interfaces',
  },
  {
    src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop',
    title: 'Systems Thinking',
  },
];

const Gallery = () => {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Visual Notebook
        </motion.h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, idx) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img
                src={img.src}
                alt={img.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-3 text-sm">
                <span className="opacity-90">{img.title}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
