import React, { useState } from 'react';
import AnimatedPage from '../../components/common/AnimatedPage';
import ContactForm from './components/ContactForm';
import ContactDetails from './components/ContactDetails';
import MapSection from './components/MapSection';
import './Contacts.css';

const Contacts = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (data) => {
        console.log("Form data submitted:", data);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000); 
    };

    return (
        <AnimatedPage>
            <section id="feedback" className="contacts-hero">
                <div className="contacts-hero-pattern"></div>
                <div className="container">
                    <h1>Контакты</h1>
                    <p className="contacts-hero-lead">Свяжитесь с нами для начала сотрудничества или по любым вопросам</p>
                </div>
            </section>

            <div className="section" style={{ paddingTop: '4rem' }}>
            <div className="container">
                <div className="feedback-section">
                    <ContactForm
                        isSubmitted={isSubmitted}
                        onSubmit={handleFormSubmit}
                    />
                </div>

                <div id="info">
                    <ContactDetails />
                </div>

                <div id="map">
                    <MapSection />
                </div>
            </div>
            </div>
        </AnimatedPage>
    );
};

export default Contacts;
