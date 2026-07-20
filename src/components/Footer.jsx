import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <footer className="bg-surface-container w-full py-section-gap">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop items-start">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="font-display text-headline-md text-primary mb-8">LUXNOVATE</div>
          <p className="font-body text-body-md text-on-surface-variant max-w-xs mb-8">
            An architectural practice dedicated to the pursuit of structural honesty and minimalist luxury.
          </p>
          <p className="font-body text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} LUXNOVATE Architecture. All rights reserved.
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-start-6 md:col-span-2 mt-12 md:mt-0">
          <h6 className="font-body text-label-caps uppercase text-primary mb-6">Explore</h6>
          <ul className="space-y-4">
            {['Portfolio', 'The Studio', 'Journal', 'Careers'].map((item) => (
              <li key={item}>
                <a className="font-body text-body-md text-on-surface-variant hover:text-primary transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="md:col-span-2 mt-12 md:mt-0">
          <h6 className="font-body text-label-caps uppercase text-primary mb-6">Social</h6>
          <ul className="space-y-4">
            {['Instagram', 'LinkedIn', 'Pinterest'].map((item) => (
              <li key={item}>
                <a className="font-body text-body-md text-on-surface-variant hover:text-primary transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3 mt-12 md:mt-0">
          <h6 className="font-body text-label-caps uppercase text-primary mb-6">Inquiries</h6>
          <p className="font-body text-body-md text-on-surface-variant mb-6">
            Stay informed on our latest projects and architectural insights.
          </p>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-outline py-2 focus:outline-none focus:border-primary transition-colors font-body text-body-md"
            />
            <div
              className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500"
              style={{ width: focused ? '100%' : '0%' }}
            />
            <button className="absolute right-0 bottom-2" aria-label="Subscribe">
              <span className="material-symbols-outlined text-primary">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
