import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import pigLogo from '../../../assets/icons/a_pig.SVG';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>
                            <img src={pigLogo} alt="Агрофорвард" className="footer-logo" />
                            Агрофорвард
                        </h3>
                        <p className="footer-desc">
                            Надежный партнер на рынке сельскохозяйственной продукции и мясосырья. Качество, проверенное временем.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-nav-title">Навигация</h4>
                        <ul className="footer-nav-list">
                            <li><Link to="/about" className="footer-link">О компании</Link></li>
                            <li><Link to="/investors" className="footer-link">Инвесторам</Link></li>
                            <li><Link to="/contacts" className="footer-link">Контакты</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-nav-title">Контакты</h4>
                        <ul className="footer-nav-list footer-desc">
                            <li>г. Москва, ул. Примерная, д. 10</li>
                            <li>+7 (999) 000-00-00</li>
                            <li>info@agroforward.ru</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} ООО «Агрофорвард». Все права защищены.</p>
                    <div className="footer-extra">
                        <span>Политика конфиденциальности</span>
                        <span>Пользовательское соглашение</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
