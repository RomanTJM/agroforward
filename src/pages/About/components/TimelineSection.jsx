import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection = ({ data }) => (
    <section id="history" className="section bg-light" style={{ scrollMarginTop: '80px' }}>
        <div className="container">
            <div className="section-head text-center">
                <h2>История развития</h2>
                <p className="subtitle">От регионального стартапа до федерального оператора</p>
            </div>
            <div className="timeline">
                {data.map((item, idx) => (
                    <motion.div
                        key={item.year}
                        className="timeline-item"
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-year text-accent">{item.year}</span>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default TimelineSection;
