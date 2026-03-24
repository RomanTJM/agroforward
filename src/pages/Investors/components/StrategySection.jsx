import React from 'react';
import Carousel from '../../../components/common/Carousel';

const StrategySection = ({ strategies }) => (
    <section id="strategy" className="section bg-light" style={{ scrollMarginTop: '80px' }}>
        <div className="container">
            <div className="section-head text-center">
                <h2>Стратегия развития 2026-2030</h2>
                <p className="subtitle">
                    Стратегия ООО «Агрофорвард» на период 2026–2030 гг. направлена на укрепление лидерских позиций в сегменте поставок мясного сырья и масштабирование бизнеса. Мы фокусируемся на трёх ключевых направлениях: расширение географии присутствия, увеличение доли рынка в существующих регионах и развитие дополнительных сервисов для клиентов.
                </p>
            </div>

            <Carousel
                items={strategies}
                cardClass="strat-card"
                activeClass="strat-card--active"
                renderCard={(item, relIdx) => (
                    <>
                        <h3>{item.title}</h3>
                        <ul>
                            {item.points.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </>
                )}
            />
        </div>
    </section>
);

export default StrategySection;
