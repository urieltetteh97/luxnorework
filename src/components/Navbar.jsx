import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const links = [
  { label: 'Portfolio', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Practice', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <NavLink to="/" className="font-display text-headline-md tracking-tighter text-primary">
        LUXNOVATE
      </NavLink>

      <div className="hidden md:flex gap-10 items-center">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `font-body text-label-caps uppercase pb-1 cursor-pointer transition-colors duration-300 ${
                isActive
                  ? 'text-secondary border-b-2 border-secondary'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <button
        onClick={() => navigate('/contact')}
        className="hidden md:inline-block bg-primary text-on-primary font-body text-label-caps px-8 py-3 uppercase tracking-widest hover:bg-on-surface-variant transition-all duration-300 active:opacity-70"
      >
        Inquire
      </button>

      <button className="md:hidden text-primary" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
        <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface border-b border-outline-variant flex flex-col md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-body text-label-caps uppercase px-margin-mobile py-4 border-b border-outline-variant/50 ${
                  isActive ? 'text-secondary' : 'text-on-surface-variant'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              navigate('/contact');
            }}
            className="bg-primary text-on-primary font-body text-label-caps uppercase px-margin-mobile py-4 tracking-widest"
          >
            Inquire
          </button>
        </div>
      )}
    </nav>
  );
}
