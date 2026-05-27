import { motion } from 'framer-motion';
import DashedFrame from '../doodles/DashedFrame';
import './Certifications.css';

const coursework = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Database Management Systems',
  'Object-Oriented Programming',
  'Computer Networks',
  'Artificial Intelligence',
];

export default function Certifications() {
  return (
    <section id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Certifications &amp; Coursework</h2>

        <div className="cert-grid">
          {/* Certifications */}
          <DashedFrame className="cert-block">
            <h3 className="cert-sub-heading">Certifications</h3>
            <ul className="cert-list">
              <li>
                <a
                  href="https://www.skills.google/public_profiles/14ec3e70-4874-43b6-ae14-dcacc66e8814"
                  className="cert-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Cloud Skills Boost public profile"
                >
                  <span className="cert-link-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/>
                      <path d="M17.6 12.2c0-.4-.04-.8-.1-1.2H12v2.3h3.2c-.14.75-.56 1.38-1.18 1.8v1.5h1.9c1.12-1.03 1.76-2.55 1.76-4.4z" fill="#fff"/>
                      <path d="M12 18c1.6 0 2.95-.53 3.93-1.44l-1.9-1.5c-.54.36-1.22.57-2.03.57-1.56 0-2.88-1.05-3.35-2.47H6.68v1.55C7.66 16.65 9.68 18 12 18z" fill="#fff"/>
                      <path d="M8.65 13.16A3.9 3.9 0 0 1 8.44 12c0-.4.07-.79.21-1.16V9.29H6.68A6.01 6.01 0 0 0 6 12c0 .97.23 1.89.68 2.71l1.97-1.55z" fill="#fff"/>
                      <path d="M12 8.57c.88 0 1.67.3 2.29.9l1.72-1.72C14.95 6.73 13.6 6.1 12 6.1c-2.32 0-4.34 1.35-5.32 3.29l1.97 1.55C9.12 9.62 10.44 8.57 12 8.57z" fill="#fff"/>
                    </svg>
                  </span>
                  Google Cloud Skills Boost — 20+ badges
                  <span className="cert-link-arrow" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 11 L11 2 M11 2 H5 M11 2 V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </li>
              {/* TODO: add specific named certs and dates */}
            </ul>
          </DashedFrame>

          {/* Coursework */}
          <DashedFrame className="cert-block" style={{ background: 'var(--paper-white)' }}>
            <h3 className="cert-sub-heading">Relevant Coursework</h3>
            <div className="coursework-chips">
              {coursework.map(c => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </DashedFrame>
        </div>
      </motion.div>
    </section>
  );
}
