import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Let’s Collaborate
        </motion.h2>

        <p className="mt-3 max-w-2xl text-slate-300">
          Have a project, workshop idea, or content collaboration in mind? Drop a message and I’ll reach out.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-teal-400/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-teal-400/40"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-teal-400/40"
              placeholder="Tell me a bit about your idea..."
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-teal-300">{status}</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-400 px-4 py-2 font-medium text-slate-900 transition hover:bg-teal-300"
            >
              <Send className="h-4 w-4" /> Send
            </button>
          </div>
        </form>

        <div className="mt-6 flex items-center gap-3 text-slate-300">
          <Mail className="h-4 w-4" /> iqbal@example.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
