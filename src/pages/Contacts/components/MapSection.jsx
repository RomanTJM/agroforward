import React from 'react';

const MapSection = () => (
    <div id="map" className="contact-card" style={{ marginTop: '2rem', scrollMarginTop: '100px' }}>
        <h3 className="mb-4">Карта проезда</h3>
        <div className="map-container">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7a13d806a147defba87ed92697843336ac39faadd04899f1fa0caefce9dff3d0&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Yandex Map"
            ></iframe>
        </div>
    </div>
);

export default MapSection;
