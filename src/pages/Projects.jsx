import React from 'react';
import Reveal from '../components/Reveal';
import { projects } from '../data/projects';

const featuredProjects = [
  {
    ...projects[0],
    blurb:
      'A contemporary residence shaped by light, landscape, and a clear sense of openness.',
  },
  {
    ...projects[1],
    blurb:
      'A sculptural cultural venue designed to frame movement, sound, and shared experience.',
  },
  {
    ...projects[2],
    blurb:
      'An intimate retreat that balances precision detailing with warm, livable luxury.',
  },
];

function Projects() {
  return (
    <main className="bg-background text-on-surface">
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-screen-2xl mx-auto">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <p className="font-body text-label-caps uppercase tracking-[0.3em] text-secondary mb-4">
                Selected Works
              </p>
              <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Architecture shaped by clarity, materiality, and purpose.
              </h1>
            </div>
          </Reveal>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 120}>
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center border-b border-outline-variant pb-12 last:border-b-0 last:pb-0">
                  <div className="order-2 lg:order-1">
                    <p className="font-body text-label-caps uppercase tracking-[0.3em] text-on-surface-variant mb-3">
                      Project 0{index + 1}
                    </p>
                    <h2 className="font-display text-headline-md mb-4">{project.title}</h2>
                    <p className="font-body text-body-md text-on-surface-variant mb-4">
                      {project.location}
                    </p>
                    <p className="font-body text-body-lg leading-relaxed text-on-surface-variant max-w-xl">
                      {project.blurb}
                    </p>
                    <button className="mt-8 border border-secondary text-secondary font-body text-label-caps uppercase px-8 py-3 tracking-[0.25em] hover:bg-secondary hover:text-white transition-all duration-300">
                      View Project
                    </button>
                  </div>

                  <div className="order-1 lg:order-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[320px] md:h-[420px] object-cover rounded-[1.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;