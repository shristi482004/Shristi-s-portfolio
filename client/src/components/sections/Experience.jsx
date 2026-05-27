import { motion } from 'framer-motion';
import DashedFrame from '../doodles/DashedFrame';
import StickyNote from '../doodles/StickyNote';
import { experience } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Where I've worked</h2>

        <div className="exp-list">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <DashedFrame className="exp-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="exp-dates">{job.dates}</span>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </DashedFrame>
            </motion.div>
          ))}

          {/* Placeholder sticky */}
          <StickyNote color="yellow" rotate={-3} style={{ fontSize: '1rem', padding: '16px 20px' }}>
            More experience coming soon...
          </StickyNote>
        </div>
      </motion.div>
    </section>
  );
}
