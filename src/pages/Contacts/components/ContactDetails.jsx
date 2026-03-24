import React from 'react';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

const ContactDetails = () => (
    <div className="contacts-top-row mt-5">
        <div id="info" className="contact-card" style={{ scrollMarginTop: '100px' }}>
            <h3><Building2 className="inline-icon text-accent" /> Контактная информация</h3>

            <div className="contact-detail">
                <span className="detail-label">Адрес офиса</span>
                <span className="detail-value flex items-start gap-2">
                    <MapPin size={18} className="text-primary mt-1 flex-shrink-0" style={{ marginRight: '10px' }} />
                    г. Москва, ул. Примерная, д. 10
                </span>
            </div>

            <div className="contact-detail">
                <span className="detail-label">Телефон</span>
                <span className="detail-value flex items-center gap-2">
                    <Phone size={18} className="text-primary" style={{ marginRight: '10px' }} />
                    +7 (999) 000-00-00
                </span>
            </div>

            <div className="contact-detail">
                <span className="detail-label">Email</span>
                <span className="detail-value flex items-center gap-2">
                    <Mail size={18} className="text-primary" style={{ marginRight: '10px' }} />
                    info@agroforward.ru
                </span>
            </div>
        </div>

        <div id="requisites" className="contact-card" style={{ scrollMarginTop: '100px' }}>
            <h3 style={{ fontSize: '1.25rem' }}>Реквизиты компании</h3>
            <div className="flex flex-col gap-3">
                <div><span className="req-label">ООО</span> "АГРОФОРВАРД"</div>
                <div><span className="req-label">ИНН / КПП:</span> <span className="req-value">7700000000 / 770001001</span></div>
                <div><span className="req-label">ОГРН:</span> <span className="req-value">1234567890123</span></div>
                <div><span className="req-label">Банк:</span> ПАО Сбербанк</div>
                <div><span className="req-label">Р/С:</span> <span className="req-value">40702810000000000001</span></div>
                <div><span className="req-label">БИК:</span> <span className="req-value">044525225</span></div>
            </div>
        </div>
    </div>
);

export default ContactDetails;
