import Reveal from './Reveal';

const spanClasses = {
  4: 'md:col-span-4',
  8: 'md:col-span-8',
};

export default function ProjectCard({ project, delay = 0 }) {
  const { title, location, span, aspect, image } = project;

  return (
    <Reveal
      delay={delay}
      className={`${spanClasses[span] ?? 'md:col-span-4'} group overflow-hidden cursor-pointer`}
    >
      <div className={`relative ${aspect} overflow-hidden bg-surface-container`}>
        <img
          src={image}
          alt={`${title}, ${location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="font-body text-label-caps uppercase text-white border border-white/50 px-6 py-2">
            View Project
          </span>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="font-display text-headline-md mb-1">{title}</h4>
        <p className="font-body text-label-caps uppercase text-on-surface-variant">{location}</p>
      </div>
    </Reveal>
  );
}
