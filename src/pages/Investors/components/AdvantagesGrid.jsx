import React from 'react';
import Carousel from '../../../components/common/Carousel';

const AdvantagesGrid = ({ advantages }) => (
    <section id="why-us" className="section bg-light" style={{ scrollMarginTop: '80px' }}>
        <div className="container">
            <div className="section-head text-center">
                <h2>Почему мы?</h2>
                <p className="subtitle">Фундаментальные драйверы роста</p>
            </div>

            <Carousel
                items={advantages}
                cardClass="adv-card"
                activeClass="adv-card--active"
                renderCard={(item) => (
                    <>
                        <div className="adv-icon text-accent">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </>
                )}
            />
        </div>
    </section>
);

export default AdvantagesGrid;
