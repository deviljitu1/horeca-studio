import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GhostButton from '../components/GhostButton';
import { projects } from '../data/content';

const ProjectCard = ({
  project,
  index,
  totalCards,
}: {
  project: (typeof projects)[0];
  index: number;
  totalCards: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-auto md:h-[85vh] sticky top-20 sm:top-24 md:top-32"
      style={{ top: `${20 + index * 20}px` }}
    >
      <motion.div
        style={{ scale }}
        className="rounded-2xl sm:rounded-[40px] md:rounded-[60px]
          border-2 border-[#D7E2EA] bg-[#0C0C0C]
          p-3 sm:p-5 md:p-8 h-full flex flex-col
          origin-top"
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-3 sm:mb-4 md:mb-6 flex-wrap gap-3 sm:gap-4">
          <div className="flex items-baseline gap-3 sm:gap-4 md:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none
                text-3xl sm:text-4xl md:text-6xl lg:text-[100px]"
            >
              {project.number}
            </span>
            <div>
              <span className="text-[#D7E2EA]/50 font-light text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-wider block">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-semibold uppercase
                  text-sm sm:text-base md:text-lg lg:text-2xl"
              >
                {project.name}
              </h3>
            </div>
          </div>
          <GhostButton label="Live Project" className="text-xs sm:text-sm px-4 sm:px-8 py-2 sm:py-3" />
        </div>

        {/* Image grid */}
        <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 flex-1 min-h-0">
          {/* Left column — 40% */}
          <div className="w-full md:w-[40%] flex flex-row md:flex-col gap-2 sm:gap-3 md:gap-4">
            <div className="h-[100px] sm:h-[130px] md:h-auto md:flex-[4] flex-1">
              <img
                src={project.images.col1Top}
                alt={`${project.name} preview 1`}
                className="w-full h-full object-cover rounded-xl sm:rounded-[30px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
            <div className="h-[100px] sm:h-[160px] md:h-auto md:flex-[6] flex-1">
              <img
                src={project.images.col1Bottom}
                alt={`${project.name} preview 2`}
                className="w-full h-full object-cover rounded-xl sm:rounded-[30px] md:rounded-[60px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column — 60% */}
          <div className="w-full md:w-[60%] h-[160px] sm:h-[200px] md:h-auto md:flex-1">
            <img
              src={project.images.col2}
              alt={`${project.name} preview 3`}
              className="w-full h-full object-cover rounded-xl sm:rounded-[30px] md:rounded-[60px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      className="bg-[#0C0C0C] rounded-t-[30px] sm:rounded-t-[40px] md:rounded-t-[60px]
        -mt-6 sm:-mt-10 md:-mt-14 relative z-10
        px-4 sm:px-6 md:px-10 py-14 sm:py-20 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase text-center leading-none tracking-tight
          mb-10 sm:mb-16 md:mb-28"
        style={{ fontSize: 'clamp(2.2rem, 10vw, 160px)' }}
      >
        Projects
      </h2>

      <div className="max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
