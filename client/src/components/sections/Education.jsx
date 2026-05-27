import { motion } from 'framer-motion';
import { education } from '../../data/education';
import './Education.css';

export default function Education() {
  return (
    <section id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Education</h2>

        <div className="edu-timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className="edu-entry"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="edu-period">{item.period}</div>
              <div className="edu-dot" />
              <div className="edu-card">
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-detail">{item.detail}</p>
                {item.coursework && (
                  <p className="edu-coursework">Coursework: {item.coursework}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
