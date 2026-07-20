import { useState } from 'react';
import Reveal from '../components/Reveal';

const offices = [
  {
    label: 'Office 01 — London',
    name: 'The Brutalist Wing',
    address: ['42 Barbican Estate', 'London, EC2Y 8BN', 'United Kingdom'],
    phone: '+44 20 7946 0000',
    tel: '+442079460000',
  },
  {
    label: 'Office 02 — New York',
    name: 'Highline Studio',
    address: ['512 West 22nd St', 'New York, NY 10011', 'United States'],
    phone: '+1 212 555 0198',
    tel: '+12125550198',
  },
];

const fieldClass =
  'bg-transparent border-none p-0 focus:ring-0 focus:outline-none text-body-md placeholder:text-outline-variant w-full font-body';

function FormField({ label, children, focused, onFocus, onBlur }) {
  return (
    <div
      className={`border-b pb-2 flex flex-col gap-2 transition-colors ${
        focused ? 'border-secondary' : 'border-outline-variant'
      }`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <label className="font-body text-[10px] tracking-[0.1em] text-on-surface-variant uppercase">{label}</label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter">
          <Reveal className="col-span-12 md:col-span-8">
            <h1 className="font-display text-display-lg-mobile md:text-display-lg mb-8">Begin the dialogue.</h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
              Our practice is rooted in collaborative structural precision. We invite inquiries from visionaries
              looking to redefine the spatial landscape.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact grid */}
      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter border-t border-outline-variant pt-12">
          {/* Offices */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-12">
            {offices.map((office, i) => (
              <Reveal
                key={office.name}
                delay={i * 100}
                className={i > 0 ? 'border-t border-outline-variant pt-12' : ''}
              >
                <span className="font-body text-label-caps text-secondary block mb-4 uppercase tracking-widest">
                  {office.label}
                </span>
                <h3 className="font-display text-headline-md mb-2">{office.name}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-4 font-body">
                  {office.address.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <a
                  className="font-body text-label-caps text-primary hover:text-secondary transition-colors"
                  href={`tel:${office.tel}`}
                >
                  {office.phone}
                </a>
              </Reveal>
            ))}
          </div>

          {/* Inquiry form */}
          <Reveal delay={150} className="col-span-12 lg:col-span-7 lg:col-start-6">
            <span className="font-body text-label-caps text-secondary block mb-8 uppercase tracking-widest">
              New Inquiry
            </span>

            {submitted ? (
              <div className="border border-outline-variant p-12 text-center">
                <p className="font-display text-headline-md mb-2">Thank you.</p>
                <p className="font-body text-body-md text-on-surface-variant">
                  Your inquiry has been received. Our team will respond within two business days.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField
                    label="Full Name"
                    focused={focusedField === 'name'}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <input
                      className={fieldClass}
                      type="text"
                      placeholder="E.g. Julian Sterling"
                      value={form.name}
                      onChange={handleChange('name')}
                      required
                    />
                  </FormField>
                  <FormField
                    label="Email Address"
                    focused={focusedField === 'email'}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <input
                      className={fieldClass}
                      type="email"
                      placeholder="julian@sterling-v.com"
                      value={form.email}
                      onChange={handleChange('email')}
                      required
                    />
                  </FormField>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <FormField
                    label="Project Type"
                    focused={focusedField === 'projectType'}
                    onFocus={() => setFocusedField('projectType')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <select
                      className={`${fieldClass} appearance-none`}
                      value={form.projectType}
                      onChange={handleChange('projectType')}
                    >
                      <option disabled value="">
                        Select category
                      </option>
                      <option value="residential">Private Residential</option>
                      <option value="commercial">Commercial Development</option>
                      <option value="public">Public Infrastructure</option>
                      <option value="cultural">Cultural Institutions</option>
                    </select>
                  </FormField>
                  <FormField
                    label="Project Location"
                    focused={focusedField === 'location'}
                    onFocus={() => setFocusedField('location')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <input
                      className={fieldClass}
                      type="text"
                      placeholder="City, Country"
                      value={form.location}
                      onChange={handleChange('location')}
                    />
                  </FormField>
                </div>

                <FormField
                  label="Brief Overview"
                  focused={focusedField === 'message'}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                >
                  <textarea
                    className={`${fieldClass} resize-none`}
                    rows={4}
                    placeholder="Describe the structural ambition..."
                    value={form.message}
                    onChange={handleChange('message')}
                  />
                </FormField>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="group flex items-center gap-4 text-primary font-body text-label-caps uppercase border border-primary px-10 py-4 hover:bg-primary hover:text-on-primary transition-all duration-500"
                  >
                    Submit Inquiry
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-300">
                      arrow_right_alt
                    </span>
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <Reveal as="section" className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="w-full h-[400px] md:h-[600px] bg-surface-container overflow-hidden relative border border-outline-variant">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
            alt="Grayscale architectural city map"
            className="w-full h-full object-cover opacity-80 grayscale"
          />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-white shadow-lg" />
            <div className="mt-4 bg-white px-4 py-2 shadow-xl border border-outline-variant">
              <span className="font-body text-[10px] tracking-tighter">STRUCTURA LDN</span>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
