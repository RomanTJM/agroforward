import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Warehouse, Monitor, TrendingUp, RefreshCw, Calendar, Target, ArrowRight, DollarSign, Clock, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const investItems = [
    { icon: <Truck size={22} />,      label: 'Расширение автопарка',         desc: 'Собственный и контрактный транспорт для охлаждённых и замороженных грузов' },
    { icon: <Warehouse size={22} />,  label: 'Складская инфраструктура',      desc: 'Федеральная сеть складов временного хранения в ключевых регионах' },
    { icon: <Monitor size={22} />,    label: 'IT-системы',                    desc: 'Сквозные ERP/WMS-решения для управления поставками и аналитики' },
    { icon: <TrendingUp size={22} />, label: 'Маркетинг и продажи',           desc: 'Развитие клиентской базы и усиление бренда федерального уровня' },
    { icon: <RefreshCw size={22} />,  label: 'Оборотный капитал',             desc: 'Финансирование ритмичных закупок сырья и исполнения долгосрочных контрактов' },
];

const returnMetrics = [
    { icon: <DollarSign size={20} />, label: 'IRR',                   value: 'Двузначная ставка',     sub: 'по модели проекта' },
    { icon: <Clock size={20} />,      label: 'Окупаемость',            value: 'По модели проекта',     sub: 'возврат инвестиций' },
    { icon: <LogOut size={20} />,     label: 'Стратегия выхода',       value: 'M&A / выкуп доли',      sub: 'или IPO в перспективе' },
];

const roadmap = [
    { year: '2026–2027', text: 'Выход на рынки Северо-Западного ФО, первый раунд логистической экспансии' },
    { year: '2027–2028', text: 'Развитие присутствия на Юге России и укрепление позиций в Поволжье' },
    { year: '2028–2030', text: 'Выход на федеральный масштаб, потенциал роста выручки в 3× за 5 лет' },
];

const InvestmentNeeds = () => (
    <section id="calendar" className="invest-section" style={{ scrollMarginTop: '100px' }}>
        <div className="container">

            <motion.div
                className="invest-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="invest-badge"><Calendar size={14} /> Календарь инвестора</div>
                <h2>Инвестиционные потребности</h2>
                <p>Для реализации стратегии масштабирования 2026–2030 привлекается раунд финансирования на развитие инфраструктуры компании.</p>
            </motion.div>

            <motion.div
                className="return-metrics"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                {returnMetrics.map((m, i) => (
                    <div key={i} className="return-metric-card">
                        <div className="rm-icon">{m.icon}</div>
                        <div className="rm-label">{m.label}</div>
                        <div className="rm-value">{m.value}</div>
                        <div className="rm-sub">{m.sub}</div>
                    </div>
                ))}
            </motion.div>

            <div className="invest-main-grid">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                >
                    <h3 className="invest-col-title">Направления финансирования</h3>
                    <div className="invest-items">
                        {investItems.map((item, i) => (
                            <motion.div
                                key={i}
                                className="invest-item"
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.07 }}
                            >
                                <div className="invest-item-icon">{item.icon}</div>
                                <div>
                                    <div className="invest-item-label">{item.label}</div>
                                    <div className="invest-item-desc">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="invest-col-title">Дорожная карта развития</h3>
                    <div className="invest-roadmap">
                        {roadmap.map((step, i) => (
                            <div key={i} className="roadmap-step">
                                <div className="roadmap-year">{step.year}</div>
                                <div className="roadmap-line">
                                    <div className="roadmap-dot" />
                                    {i < roadmap.length - 1 && <div className="roadmap-track" />}
                                </div>
                                <div className="roadmap-text">{step.text}</div>
                            </div>
                        ))}
                    </div>

                    <div id="investor-contacts" className="invest-cta-box" style={{ scrollMarginTop: '100px' }}>
                        <Target size={18} />
                        <div>
                            <div className="invest-cta-title">Заинтересованы в партнёрстве?</div>
                            <div className="invest-cta-sub">Предоставим полную финансовую модель и условия сотрудничества</div>
                        </div>
                        <Link to="/contacts" className="btn btn-accent btn-sm invest-cta-btn">
                            Связаться <ArrowRight size={15} />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default InvestmentNeeds;
