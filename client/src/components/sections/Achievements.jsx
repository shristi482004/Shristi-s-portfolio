import { motion } from 'framer-motion';
import StickyNote from '../doodles/StickyNote';
import { achievements } from '../../data/achievements';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          Wins &amp; Recognitions
          <StickyNote color="pink" rotate={4} style={{ fontSize: '0.8rem', padding: '4px 10px', fontFamily: 'var(--font-hand)', marginLeft: 4 }}>
            NEW!
          </StickyNote>
        </h2>

        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="achievement-wrapper"
            >
              <div
                className="achievement-card"
                style={{
                  background: a.color === 'pink' ? 'var(--accent-pink)' : a.color === 'yellow' ? 'var(--accent-yellow)' : 'var(--paper-white)',
                  transform: `rotate(${a.rotate}deg)`,
                }}
              >
                <h3 className="achievement-title">{a.title}</h3>
                {a.sub && <p className="achievement-sub">{a.sub}</p>}
                {a.detail && <p className="achievement-detail">{a.detail}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
