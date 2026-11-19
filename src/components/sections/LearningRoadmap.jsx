import { motion } from 'framer-motion';
import { roadmapData } from '../../data/roadmap';

export default function LearningRoadmap() {
  return (
    <section id="learning" className="section learning">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">06 / CURRICULUM &amp; GROWTH</div>
          <h2 className="section-title">
            LEARNING <span className="text-gradient">ROADMAP</span>
          </h2>
          <p className="section-subtitle">
            A disciplined, sequential engineering pathway across computer science,
            data manipulation, statistical modeling, and generative systems.
          </p>
        </motion.div>

        <div className="roadmap__timeline">
          {roadmapData.map((stage, idx) => {
            const statusClass = `roadmap__status--${stage.status}`;
            const nodeStatusClass =
              stage.status === 'current'
                ? 'roadmap__node--current'
                : stage.status === 'completed'
                ? 'roadmap__node--completed'
                : '';

            return (
              <motion.div
                key={stage.stage}
                className="roadmap__item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className={`roadmap__node ${nodeStatusClass}`}>
                  <div className="roadmap__node-inner" />
                </div>

                <div className="glass-panel roadmap__card">
                  <div className="roadmap__card-header">
                    <div>
                      <span className="roadmap__stage-num">
                        PHASE 0{stage.stage}
                      </span>
                      <h3 className="roadmap__stage-title">{stage.title}</h3>
                    </div>
                    <span className={`roadmap__status ${statusClass}`}>
                      {stage.status === 'current'
                        ? 'IN PROGRESS'
                        : stage.status.toUpperCase()}
                    </span>
                  </div>

                  {stage.note && <p className="roadmap__note">{stage.note}</p>}

                  {stage.topics && stage.topics.length > 0 && (
                    <div className="roadmap__topics">
                      {stage.topics.map((topic) => (
                        <span key={topic} className="roadmap__topic">
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {stage.algorithms && stage.algorithms.length > 0 && (
                    <div className="roadmap__sub-section">
                      <div className="roadmap__sub-title">CORE ALGORITHMS:</div>
                      <div className="roadmap__topics">
                        {stage.algorithms.map((algo) => (
                          <span
                            key={algo}
                            className="roadmap__topic"
                            style={{ borderColor: 'rgba(196, 0, 36, 0.2)' }}
                          >
                            {algo}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {stage.metrics && stage.metrics.length > 0 && (
                    <div className="roadmap__sub-section">
                      <div className="roadmap__sub-title">EVALUATION METRICS:</div>
                      <div className="roadmap__topics">
                        {stage.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="roadmap__topic"
                            style={{ borderColor: 'rgba(196, 0, 36, 0.2)' }}
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
