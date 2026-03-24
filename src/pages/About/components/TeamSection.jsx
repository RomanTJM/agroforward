import React from 'react';
import { motion } from 'framer-motion';
import generalManager     from '../../../assets/images/general-manager.png';
import commercialDirector from '../../../assets/images/commercial-director.png';

const TeamSection = () => (
    <section id="team" className="section" style={{ scrollMarginTop: '100px' }}>
        <div className="container">
            <div className="section-head text-center mb-5">
                <h2 className="mb-4">Команда управления</h2>
            </div>
            <div className="team-grid">
                <motion.div
                    className="team-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="team-image-wrapper">
                        <img src={generalManager} alt="Генеральный директор" className="team-photo" />
                    </div>
                    <div className="team-info">
                        <h4>Генеральный директор</h4>
                        <span className="text-accent mb-3 d-block">Руководство и стратегия</span>
                        <p className="team-quote"><i>«Успех — результат работы команды профессионалов с многолетним опытом в агропромышленном секторе. Наши руководители обладают глубокими знаниями рынка мясного сырья, логистики и корпоративного управления»</i></p>
                    </div>
                </motion.div>

                <motion.div
                    className="team-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="team-image-wrapper">
                        <img src={commercialDirector} alt="Коммерческий директор" className="team-photo" />
                    </div>
                    <div className="team-info">
                        <h4>Коммерческий директор</h4>
                        <span className="text-accent mb-3 d-block">Продажи и партнерства</span>
                        <p className="team-quote"><i>«ООО «Агрофорвард» осуществляет деятельность в строгом соответствии с требованиями законодательства РФ. Все процессы сертифицированы, продукция соответствует государственным стандартам качества и безопасности. Мы регулярно проходим проверки контролирующих органов и поддерживаем высокие стандарты работы.»</i></p>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default TeamSection;
