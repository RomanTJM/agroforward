import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => (
    <section className="cta-section">
        <div className="container">
            <motion.div
                className="cta-content"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Готовы начать <span className="text-accent underline underline-offset-8">сотрудничество?</span></h2>
                <p className="subtitle text-white">Узнайте больше о наших инвестиционных программах и оптовых условиях поставки.</p>
                <div className="hero-cta justify-center mt-10">
                    <Link to="/investors" className="btn btn-primary cta-btn btn-lg group">
                        Инвесторам <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/contacts" className="btn btn-outline border-white text-white btn-lg">
                        Контакты
                    </Link>
                </div>
            </motion.div>
        </div>
    </section>
);

export default CTA;
