import { motion } from 'framer-motion';
import BlueSparkle from '../doodles/BlueSparkle';
import './About.css';

const techBar = ['React', 'Node.js', 'Flutter', 'Python', 'GCP', 'Gemini API'];

const facts = [
  { label: 'Name', value: 'Shristi' },
  { label: 'Based in', value: 'Patna, India' },
  { label: 'Studying', value: 'B.Tech CSE · NIT Patna · 2nd year' },
  { label: 'CGPA', value: '8.93 / 10' },
];

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">
          About me <BlueSparkle size={28} />
        </h2>

        <div className="about-layout">
          {/* Left — text */}
          <div className="about-text">
            <p className="about-intro">
              hi, i'm shristi — a cs student running on curiosity, caffeine,
              chaotic ambition, and approximately 37 open tabs.
            </p>

            <p className="about-body">
              I like building things that feel thoughtful, useful, and just a little bit
              magical — whether that's AI-powered products, polished web experiences, or
              ideas that randomly appear at 2am and refuse to leave me alone.
            </p>

            <div className="about-currently-block">
              <span className="about-currently-label">currently</span>
              <ul className="about-currently">
                <li>learning how real systems work</li>
                <li>trying to become internship-worthy before my breakdown-worthy era begins</li>
                <li>building projects that make people go "wait... this is actually cool."</li>
              </ul>
            </div>

            <p className="about-footer-line">
              if you're here to explore my work, stalk my github, or witness the
              evolution of an engineer figuring things out in real time —{' '}
              <strong>welcome. you're early.</strong>
            </p>
          </div>

          {/* Right — fact card */}
          <div className="about-card-col">
            <div className="about-fact-card">
              <div className="about-fact-card-pin" aria-hidden="true" />
              {facts.map(f => (
                <div key={f.label} className="about-fact-row">
                  <span className="about-fact-label">{f.label}</span>
                  <span className="about-fact-value">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-tech-bar">
          {techBar.map(t => (
            <span key={t} className="about-tech-chip">{t}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
