import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Carousel from '../../../components/common/Carousel';

const ValuesSection = ({ values }) => (
    <section className="section bg-light">
        <div className="container">
            <div className="section-head text-center">
                <h2>Наши Ценности</h2>
            </div>

            <Carousel
                items={values}
                cardClass="value-card"
                activeClass="value-card--active"
                renderCard={(v) => (
                    <>
                        <h3>{v.title}</h3>
                        <ul>
                            {v.items.map((item, i) => (
                                <li key={i}>
                                    <CheckCircle2 size={16} className="text-primary" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            />
        </div>
    </section>
);

export default ValuesSection;
