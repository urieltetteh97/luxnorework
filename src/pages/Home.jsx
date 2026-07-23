import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import heroBackground from '../assets/llhgrfc.jpg';

const process = [
  {
    number: '01',
    title: 'Conceptualization',
    copy: "Where vision meets site analysis. We define the project's soul before the first line is drawn.",
  },
  {
    number: '02',
    title: 'Structural Rigor',
    copy: 'Precision engineering that allows for architectural freedom and gravity-defying aesthetics.',
  },
  {
    number: '03',
    title: 'Material Craft',
    copy: 'Selecting only the finest elements that age with grace and maintain structural integrity.',
  },
];

const filters = ['All Works', 'Residential', 'Commercial', 'Cultural'];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackground}
            alt="Hero background"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 text-center px-margin-mobile md:px-0 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-display-lg-mobile md:text-display-lg text-white mb-8"
          >
            Embrace Comfort.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-16 h-[1px] bg-white mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-label-caps text-white tracking-[0.3em] uppercase"
          >
            Architectural Excellence &amp; Structural Precision
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <span className="material-symbols-outlined text-white text-3xl">expand_more</span>
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="philosophy">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <Reveal className="md:col-start-3 md:col-span-8 text-center">
            <span className="font-body text-label-caps uppercase text-secondary mb-6 block">Our Philosophy</span>
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface mb-12">
              Architecture as a dialogue between structure and environment.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              At Luxnovate, we believe that true luxury lies in the intentionality of space. We strip away the
              unnecessary, leaving only the essential. Our designs are not merely buildings; they are curated
              experiences—measured, precise, and profoundly connected to the landscapes they inhabit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 flex justify-between items-end border-b border-outline-variant pb-8">
            <div>
              <span className="font-body text-label-caps uppercase text-on-surface-variant block mb-2">
                Selected Works
              </span>
              <h3 className="font-display text-headline-md text-on-surface">The Portfolio</h3>
            </div>
            <div className="hidden md:flex gap-8">
              {filters.map((f, i) => (
                <span
                  key={f}
                  className={`font-body text-label-caps uppercase cursor-pointer transition-colors ${
                    i === 0
                      ? 'text-primary border-b border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={i * 50} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="border border-secondary text-secondary font-body text-label-caps uppercase px-12 py-4 tracking-widest hover:bg-secondary hover:text-white transition-all duration-300">
              Explore Full Archive
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {process.map((step, i) => (
            <Reveal key={step.number} delay={i * 200}>
              <span className="font-display text-display-lg-mobile md:text-display-lg text-primary block mb-4">
                {step.number}
              </span>
              <h5 className="font-display text-headline-md mb-4">{step.title}</h5>
              <p className="font-body text-body-md text-on-surface-variant">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
