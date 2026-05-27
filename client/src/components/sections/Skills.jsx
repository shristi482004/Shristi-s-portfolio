import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import './Skills.css';

const rotations = [-3, 2, -2, 3, -1, 2, -3, 1, -2, 3, -1, 2];

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-heading">Tools of the trade</h2>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <div className="skills-chips">
                {group.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ transform: `rotate(${rotations[(gi + si) % rotations.length]}deg)` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
