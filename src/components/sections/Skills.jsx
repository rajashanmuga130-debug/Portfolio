import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeStatus, setActiveStatus] = useState('all'); // 'all', 'learned', 'learning'

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredCategories = skillsData
    .map((cat) => {
      // Filter by category
      if (activeCategory !== 'All' && cat.category !== activeCategory) {
        return null;
      }
      // Filter by status if applied
      const matchingSkills = cat.skills.filter((skill) => {
        if (activeStatus === 'all') return true;
        return skill.status === activeStatus;
      });

      if (matchingSkills.length === 0) return null;

      return {
        ...cat,
        skills: matchingSkills,
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">04 / CAPABILITIES</div>
          <h2 className="section-title">
            TECHNICAL <span className="text-gradient">ARSENAL</span>
          </h2>
          <p className="section-subtitle">
            A structured matrix of software engineering skills, analytical libraries,
            and machine learning frameworks with explicit learning statuses.
          </p>

          {/* Status Legend & Filter */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginTop: '1.75rem',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
              }}
            >
              <span>STATUS:</span>
              <button
                onClick={() => setActiveStatus('all')}
                style={{
                  background: activeStatus === 'all' ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  color: activeStatus === 'all' ? 'var(--text)' : 'var(--text-dim)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.68rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                All
              </button>
              <button
                onClick={() => setActiveStatus('learned')}
                style={{
                  background: activeStatus === 'learned' ? 'rgba(40, 200, 64, 0.15)' : 'transparent',
                  color: activeStatus === 'learned' ? '#28c840' : 'var(--text-dim)',
                  border: '1px solid rgba(40, 200, 64, 0.3)',
                  borderRadius: '100px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.68rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#28c840' }} />
                Learned
              </button>
              <button
                onClick={() => setActiveStatus('learning')}
                style={{
                  background: activeStatus === 'learning' ? 'rgba(224, 0, 42, 0.15)' : 'transparent',
                  color: activeStatus === 'learning' ? 'var(--bright-red)' : 'var(--text-dim)',
                  border: '1px solid rgba(224, 0, 42, 0.3)',
                  borderRadius: '100px',
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.68rem',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--bright-red)' }} />
                Currently Learning
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
              marginBottom: '1rem',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '100px',
                  border:
                    activeCategory === cat
                      ? '1px solid var(--accent-red)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                  background:
                    activeCategory === cat
                      ? 'rgba(196, 0, 36, 0.2)'
                      : 'rgba(255, 255, 255, 0.02)',
                  color: activeCategory === cat ? 'var(--text)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="skills__grid">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.category}
              className="glass-panel skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="skill-category__header">
                <span className="skill-category__icon">{category.icon}</span>
                <h3 className="skill-category__title">{category.category}</h3>
              </div>

              <div className="skill-category__items">
                {category.skills.map((skill) => {
                  const isLearning = skill.status === 'learning';
                  return (
                    <span
                      key={skill.name}
                      className="skill-pill"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        border: isLearning
                          ? '1px dashed rgba(224, 0, 42, 0.4)'
                          : '1px solid rgba(196, 0, 36, 0.12)',
                      }}
                      title={isLearning ? 'Currently learning & practicing' : 'Learned technical foundation'}
                      data-magnetic
                    >
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: isLearning ? 'var(--bright-red)' : '#28c840',
                          display: 'inline-block',
                        }}
                      />
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
