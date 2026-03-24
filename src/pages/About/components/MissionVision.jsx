import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Layers } from 'lucide-react';

const visionBlocks = [
    {
        icon: <TrendingUp size={20} />,
        title: 'Стратегическое развитие',
        text: 'В перспективе 5 лет компания планирует нарастить объемы поставок за счет углубления работы с действующими агрохолдингами и выхода в новые регионы РФ, в том числе в Сибирь и на Дальний Восток. Основной фокус — длинные контракты с крупными переработчиками, обеспечивающие предсказуемость загрузки и устойчивость финансовых потоков. Компания продолжит диверсифицировать продуктовую линейку по видам мясосырья, категориям качества и форматам поставки.'
    },
    {
        icon: <Globe size={20} />,
        title: 'География и международное направление',
        text: 'Важным драйвером роста станет развитие импортных каналов из стран СНГ и дружественных юрисдикций, что позволит сглаживать ценовые колебания и снижать сырьевые риски. Параллельно планируется расширение присутствия внутри России: формирование устойчивой сети поставок между регионами производства и потребления, развитие складской и логистической инфраструктуры ближе к ключевым клиентам.'
    },
    {
        icon: <Layers size={20} />,
        title: 'Долгосрочное видение',
        text: 'Компания ориентируется на роль одного из ключевых операторов рынка мясосырья РФ с устойчивым портфелем крупных клиентов и развитой сетью поставщиков внутри страны и в СНГ. Цель — создать бизнес, стабильный в любых макроэкономических условиях за счет диверсификации, технологичности и глубокой интеграции в цепочки поставок клиентов.'
    }
];

const MissionVision = () => (
    <section id="mission" className="section" style={{ scrollMarginTop: '80px' }}>
        <div className="container">
            <div className="mv-layout">
                <motion.div
                    className="mv-mission-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="mv-mission-inner">
                        <Target className="mv-big-icon" />
                        <h3>Миссия</h3>
                        <p>Обеспечивать предприятия мясоперерабатывающей отрасли качественным сырьем, создавая долгосрочные партнерские отношения, основанные на надежности, прозрачности и профессионализме. Мы стремимся быть ключевым звеном в цепочке поставок АПК России.</p>
                    </div>
                </motion.div>

                <div className="mv-vision-area">
                    <h3 className="mv-vision-title">Видение будущего</h3>
                    <div className="mv-vision-grid">
                        {visionBlocks.map((block, idx) => (
                            <motion.div
                                key={block.title}
                                className="mv-vision-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="mv-vision-icon">{block.icon}</div>
                                <h4>{block.title}</h4>
                                <p>{block.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default MissionVision;
