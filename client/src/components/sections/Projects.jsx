import { motion } from 'framer-motion';
import DashedFrame from '../doodles/DashedFrame';
import StickyNote from '../doodles/StickyNote';
import PinkStar from '../doodles/PinkStar';
import BlueSparkle from '../doodles/BlueSparkle';
import HighlighterUnderline from '../doodles/HighlighterUnderline';
import { projects } from '../../data/projects';
import './Projects.css';

function GitHubIcon() {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"/>
      <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z"/>
      <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z"/>
      <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z"/>
      <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z"/>
    </svg>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className={`project-card-wrapper ${project.featured ? 'project-card--featured' : ''}`}
      whileHover={{ y: -4, rotate: 1 }}
      transition={{ duration: 0.2 }}
    >
      <DashedFrame className="project-card">
        {project.featured && (
          <>
            <StickyNote color="pink" rotate={-8} style={{ position: 'absolute', top: '-14px', left: '16px', zIndex: 2, fontSize: '0.75rem', fontFamily: 'var(--font-hand)', letterSpacing: '0.04em' }}>
              MAJOR PROJECT
            </StickyNote>
            <PinkStar size={26} style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }} />
          </>
        )}

        {/* Screenshot placeholder */}
        <div className="project-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span className="project-image-label" style={{ fontFamily: 'var(--font-hand)', color: 'var(--muted-text)', fontSize: '0.9rem' }}>
              {project.title}
            </span>
          )}
        </div>

        <div className="project-body">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>

          {project.featured && project.longDescription && (
            <p className="project-long-desc">{project.longDescription}</p>
          )}

          <div className="project-chips">
            {project.stack.map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="project-links">
            {project.github && (
              <a href={project.github} className="project-icon-link" aria-label={`${project.title} GitHub repository`} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            )}
            {project.live && (
              <a href={project.live} className="project-icon-link" aria-label={`${project.title} live demo`} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon />
              </a>
            )}
            {project.figma && (
              <a href={project.figma} className="project-icon-link" aria-label={`${project.title} Figma`} target="_blank" rel="noopener noreferrer">
                <FigmaIcon />
              </a>
            )}
          </div>
        </div>
      </DashedFrame>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          My <HighlighterUnderline>Work</HighlighterUnderline>
          <BlueSparkle size={26} />
        </h2>

        <div className="projects-grid">
          {/* Featured */}
          {featured && <ProjectCard project={featured} />}

          {/* Rest */}
          {rest.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
