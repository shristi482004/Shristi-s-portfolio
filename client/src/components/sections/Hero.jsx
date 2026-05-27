import { motion } from 'framer-motion';
import PinkStar from '../doodles/PinkStar';
import StickyNote from '../doodles/StickyNote';
import ArrowDoodle from '../doodles/ArrowDoodle';
import HighlighterUnderline from '../doodles/HighlighterUnderline';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Decorative stars */}
      <PinkStar size={36} style={{ position: 'absolute', top: '18%', left: '2%' }} />
      <PinkStar size={24} style={{ position: 'absolute', bottom: '18%', right: '2%' }} />

      {/* Left column */}
      <div className="hero-left">
        <motion.div {...fadeUp(0.1)}>
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-badge">
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" fill="var(--accent-pink)" stroke="var(--ink-black)" strokeWidth="1.2"/>
              </svg>
              2nd year CSE student at NIT Patna
            </span>
          </p>
        </motion.div>

        <motion.h1 className="hero-headline" {...fadeUp(0.2)}>
          I build top<br />
          notch{' '}
          <HighlighterUnderline>products</HighlighterUnderline>
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.35)}>
          Running on curiosity, caffeine, and approximately 37 open tabs.
          I build things that feel thoughtful, useful, and just a little bit magical.
        </motion.p>

        <motion.div className="hero-cta-row" {...fadeUp(0.45)}>
          <a
            href="#projects"
            className="pill-btn"
            style={{ background: 'var(--accent-blue)', color: 'var(--paper-white)' }}
          >
            See My Work
          </a>
          <a href="#contact" className="pill-btn hero-contact-btn">
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Right column — photo */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        {/* Sticky note on top-left of frame */}
        <StickyNote color="yellow" rotate={-6} style={{ position: 'absolute', top: '-18px', left: '-12px', zIndex: 2, fontSize: '0.85rem' }}>
          open to work!
        </StickyNote>

        {/* Arrow + label */}
        <ArrowDoodle style={{ position: 'absolute', bottom: '-52px', right: '-20px', zIndex: 2 }} />

        {/* Photo frame */}
        <div className="hero-photo-frame dashed-frame">
          <img
            src="/shristi.jpg"
            alt="Shristi"
            className="hero-photo"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hero-photo-placeholder" style={{ display: 'none' }}>
            <span style={{ fontFamily: 'var(--font-hand)', fontSize: '1.2rem', color: 'var(--muted-text)' }}>PHOTO</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
