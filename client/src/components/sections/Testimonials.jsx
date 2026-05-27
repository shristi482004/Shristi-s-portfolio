import { motion } from 'framer-motion';
import './Testimonials.css';

/* TODO: replace with real testimonials */
const placeholders = [
  { id: 1, quote: 'Testimonial coming soon...', name: 'Colleague', role: 'Role', rotate: -4 },
  { id: 2, quote: 'Testimonial coming soon...', name: 'Mentor', role: 'Role', rotate: 3 },
  { id: 3, quote: 'Testimonial coming soon...', name: 'Collaborator', role: 'Role', rotate: -2 },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Kind words</h2>

        <div className="testimonials-grid">
          {placeholders.map((t, i) => (
            <motion.div
              key={t.id}
              className="testimonial-card"
              style={{ transform: `rotate(${t.rotate}deg)` }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              whileHover={{ rotate: 0, y: -4 }}
            >
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
