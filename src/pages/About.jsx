import { useNavigate } from 'react-router-dom';
import Reveal from '../components/Reveal';

const heritage = [
  {
    year: '1994',
    title: 'The Founding',
    copy: 'Structura was founded with a single desk and a vision to strip away the ornament that defined 80s postmodernism, returning to the core of structural integrity.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    reverse: false,
  },
  {
    year: '2008',
    title: 'Global Expansion',
    copy: "Opening our second studio in Tokyo allowed us to merge Western structural principles with Eastern spatial philosophy, resulting in our award-winning 'Void House'.",
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    reverse: true,
  },
  {
    year: '2024',
    title: 'Future Frontiers',
    copy: "Today, we leverage generative design and carbon-neutral materials to create spaces that aren't just dwellings, but sustainable ecosystems.",
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    reverse: false,
  },
];

const team = [
  {
    name: 'Julian Vance',
    role: 'Founder & Principal',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Elena Rossi',
    role: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Kenji Sato',
    role: 'Lead Architect, Tokyo',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
  },
];

const recognition = [
  { title: 'Pritzker Prize Nomination', year: '2022' },
  { title: 'RIBA International Award', year: '2019' },
  { title: 'Aga Khan Award for Architecture', year: '2015' },
  { title: 'World Architecture Festival Winner', year: '2012' },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter items-end">
          <Reveal className="col-span-12 md:col-span-8" as="div">
            <span className="font-body text-label-caps uppercase text-secondary mb-4 block">Practice</span>
            <h1 className="font-display text-display-lg-mobile md:text-display-lg leading-none mb-8">
              Redefining Space <br />
              Since 1994.
            </h1>
          </Reveal>
          <Reveal delay={200} className="col-span-12 md:col-span-4">
            <p className="font-body text-body-lg text-on-surface-variant mb-8">
              A collective of architects, designers, and visionaries dedicated to the art of structural precision
              and timeless minimalism.
            </p>
          </Reveal>
        </div>

        <Reveal delay={400} className="mt-12 h-[400px] md:h-[614px] overflow-hidden relative">
          <div className="absolute inset-0 blueprint-pattern pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80"
            alt="Architectural sketch of a modernist skyscraper"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </Reveal>
      </section>

      {/* Heritage timeline */}
      <section className="px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter mb-24">
          <Reveal className="col-span-12 md:col-span-4">
            <h2 className="font-display text-headline-lg border-t-2 border-primary pt-6">Our Heritage</h2>
          </Reveal>
          <Reveal delay={100} className="col-span-12 md:col-span-8">
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
              From a modest studio in London to a global practice, our journey is defined by a consistent pursuit
              of clarity. We believe that architecture should be as honest as the materials it consists of.
            </p>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-32">
          {heritage.map((item) => (
            <div key={item.year} className="grid grid-cols-12 gap-gutter group">
              <div
                className={`col-span-12 md:col-span-2 ${
                  item.reverse ? 'order-1 md:order-2 md:text-right' : ''
                }`}
              >
                <span className="font-display text-display-lg-mobile md:text-display-lg text-outline-variant opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  {item.year}
                </span>
              </div>
              <div
                className={`col-span-12 md:col-span-6 h-64 overflow-hidden ${
                  item.reverse ? 'order-3 md:order-1' : ''
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover filter grayscale transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div
                className={`col-span-12 md:col-span-4 ${
                  item.reverse ? 'order-2 md:order-3 md:pl-12' : ''
                }`}
              >
                <h3 className="font-display text-headline-md mb-4">{item.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Collective */}
      <section className="bg-surface-container py-section-gap overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-12 gap-gutter mb-20">
            <Reveal className="col-span-12 md:col-span-6">
              <span className="font-body text-label-caps uppercase text-secondary mb-4 block">People</span>
              <h2 className="font-display text-headline-lg leading-tight">The Collective</h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-12 gap-gutter">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i + 1) * 100} className="col-span-12 md:col-span-4 group">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-display text-headline-md">{member.name}</h4>
                <p className="font-body text-label-caps uppercase text-secondary mt-1">{member.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-12 gap-gutter mb-20">
          <Reveal className="col-span-12 md:col-span-5">
            <h2 className="font-display text-headline-lg">Recognition</h2>
          </Reveal>
        </div>
        <Reveal className="border-t border-outline-variant">
          {recognition.map((item, i) => (
            <div
              key={item.title}
              className="grid grid-cols-12 gap-gutter py-8 md:py-12 border-b border-outline-variant items-center hover:bg-surface-container transition-colors px-4 group"
            >
              <div className="col-span-2 font-display text-headline-md text-outline-variant group-hover:text-primary transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="col-span-6 font-display text-headline-md">{item.title}</div>
              <div className="col-span-4 font-body text-label-caps text-right text-on-surface-variant">
                {item.year}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal as="section" className="px-margin-mobile md:px-margin-desktop pb-section-gap text-center">
        <div className="max-w-3xl mx-auto border border-outline-variant p-12 md:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 blueprint-pattern opacity-10 group-hover:scale-110 transition-transform duration-1000" />
          <h2 className="font-display text-headline-lg mb-8 relative z-10">Shape your legacy.</h2>
          <button
            onClick={() => navigate('/contact')}
            className="relative z-10 border-2 border-primary px-12 py-4 font-body text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-all duration-300"
          >
            Start a Conversation
          </button>
        </div>
      </Reveal>
    </main>
  );
}
