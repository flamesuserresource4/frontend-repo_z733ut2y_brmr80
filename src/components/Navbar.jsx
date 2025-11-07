import React from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="mt-5 flex items-center justify-between rounded-full border border-white/10 bg-slate-900/60 px-4 py-3 text-white backdrop-blur-xl">
          <a href="#hero" className="font-semibold tracking-tight">Iqbal • AI</a>

          <nav className="hidden gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-slate-900/80 p-4 backdrop-blur"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
