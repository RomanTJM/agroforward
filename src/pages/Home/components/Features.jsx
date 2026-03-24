import React from 'react';
import { motion } from 'framer-motion';

const Features = ({ features }) => (
    <section className="section bg-white features">
        <div className="container">
            <div className="section-head text-center">
                <h2>Почему выбирают <span className="text-primary">Агрофорвард</span></h2>
                <p className="subtitle">Фундамент нашего успеха кроется в бескомпромиссном подходе к делу.</p>
            </div>

            <div className="features-grid">
                {features.map((feat, idx) => (
                    <motion.div
                        key={idx}
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35, margin: "-20% 0px -20% 0px" }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
                    >
                        <div className="icon-wrapper">
                            {feat.icon}
                        </div>
                        <h3>{feat.title}</h3>
                        <p>{feat.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
