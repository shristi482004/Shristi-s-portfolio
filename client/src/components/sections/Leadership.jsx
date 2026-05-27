import { motion } from 'framer-motion';
import { leadership } from '../../data/leadership';
import './Leadership.css';

export default function Leadership() {
  return (
    <section id="leadership">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Beyond code</h2>

        <div className="leadership-list">
          {leadership.map((item, i) => (
            <motion.div
              key={item.id}
              className="leadership-card"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <div className="leadership-dot" />
              <div className="leadership-content">
                <div className="leadership-header">
                  <h3 className="leadership-role">{item.role}</h3>
                  <span className="leadership-dates">{item.dates}</span>
                </div>
                <p className="leadership-org">{item.org}</p>
                {item.detail && <p className="leadership-detail">{item.detail}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
