import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero = () => (
    <section className="hero">
        <div className="hero-pattern"></div>
        <div className="container hero-container">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
                <motion.div
                    className="badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Надежный поставщик мясосырья
                </motion.div>
                <h1 className="hero-title">
                    Качество, проверенное <br /><span className="text-accent">временем</span> и <span className="text-primary">природой</span>
                </h1>
                <p className="hero-subtitle">
                    ООО «Агрофорвард» — ваш стратегический партнер на рынке качественного мясного сырья. Мы соединяем фермерские традиции с современными технологиями.
                </p>
                <div className="hero-cta">
                    <Link to="/about" className="btn btn-primary btn-lg">
                        Узнать больше
                    </Link>
                    <Link to="/contacts" className="btn btn-outline btn-lg">
                        Стать партнером <ArrowRight size={18} />
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="visual-card visual-card-main">
                    <div className="visual-placeholder relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent"></div>
                        <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meat production" className="object-cover w-full h-full rounded-2xl grayscale-[20%] sepia-[10%]" />
                    </div>
                    <motion.div
                        className="floating-badge badge-1"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <ShieldCheck className="text-primary" />
                        <span>ГОСТ Стандарт</span>
                    </motion.div>
                    <motion.div
                        className="floating-badge badge-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <div className="text-accent font-bold text-xl">15+</div>
                        <span className="text-xs text-gray-500">Лет на рынке</span>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    </section>
);

export default Hero;
