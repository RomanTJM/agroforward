import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import './Header.css';
import pigLogo from '../../../assets/icons/a_pig.SVG';

const navItems = [
    {
        name: 'О компании', path: '/about',
        subLinks: [
            { name: 'История компании', hash: '#history' },
            { name: 'Миссия и ценности', hash: '#mission' },
            { name: 'Команда управления', hash: '#team' },
            { name: 'Лицензии и сертификаты', hash: '#docs' },
            { name: 'География работы', hash: '#geo' },
            { name: 'Наши партнеры', hash: '#partners' }
        ]
    },
    {
        name: 'Инвесторам', path: '/investors',
        subLinks: [
            { name: 'Почему Мы', hash: '#why-us' },
            { name: 'Финансовые показатели', hash: '#financials' },
            { name: 'Отчетность', hash: '#reports' },
            { name: 'Корпоративное управление', hash: '#governance' },
            { name: 'Стратегия развития', hash: '#strategy' },
            { name: 'Календарь инвестора', hash: '#calendar' },
            { name: 'Контакты', path: '/contacts', hash: '#feedback' }
        ]
    },
    {
        name: 'Контакты', path: '/contacts',
        subLinks: [
            { name: 'Контактная информация', hash: '#info' },
            { name: 'Реквизиты компании', hash: '#requisites' },
            { name: 'Форма обратной связи', hash: '#feedback' },
            { name: 'Карта проезда', hash: '#map' }
        ]
    },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`} onMouseLeave={() => setActiveDropdown(null)}>
            <div className="container header-container">
                <Link to="/" className="brand" onClick={() => setActiveDropdown(null)}>
                    <motion.div className="logo-wrapper" layoutId="logo">
                        <img src={pigLogo} alt="Агрофорвард Лого" />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Агрофорвард
                    </motion.span>
                </Link>

                <nav className="nav-desktop">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.path}
                            className="nav-item-container"
                            onMouseEnter={() => setActiveDropdown(item.path)}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                        >
                            <NavLink
                                to={item.path}
                                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                onClick={() => setActiveDropdown(null)}
                            >
                                {item.name}
                                <ChevronDown size={14} className={`dropdown-icon ${activeDropdown === item.path ? 'open' : ''}`} />
                            </NavLink>

                            <AnimatePresence>
                                {activeDropdown === item.path && (
                                    <motion.div
                                        className="dropdown-menu"
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95, transition: { duration: 0.1 } }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    >
                                        <ul>
                                            {item.subLinks.map(sub => (
                                                <li key={sub.hash}>
                                                    <Link
                                                        to={`${sub.path || item.path}${sub.hash}`}
                                                        className={`dropdown-link ${(sub.path || item.path) === pathname && hash === sub.hash ? 'active' : ''}`}
                                                        onClick={() => setActiveDropdown(null)}
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </nav>

                <div className="nav-actions">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hidden-mobile"
                    >
                        <Link to="/contacts" className="btn btn-primary" onClick={() => setActiveDropdown(null)}>
                            <PhoneCall size={18} />
                            <span>Связаться</span>
                        </Link>
                    </motion.div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden', backgroundColor: 'var(--color-bg-white)', boxShadow: 'var(--shadow-md)' }}
                    >
                        <div className="mobile-nav">
                        <div className="container" style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navItems.map((item) => (
                                <div key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className="nav-link"
                                        style={{ display: 'block', padding: '0.5rem 0', fontSize: '1.2rem', fontWeight: 'bold' }}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                    <ul className="mobile-sublinks" style={{ paddingLeft: '1rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        {item.subLinks.map(sub => (
                                            <li key={sub.hash}>
                                                <Link
                                                    to={`${sub.path || item.path}${sub.hash}`}
                                                    style={{
                                                        color: ((sub.path || item.path) === pathname && hash === sub.hash) ? 'var(--color-accent)' : 'var(--color-text-muted)',
                                                        display: 'block',
                                                        padding: '0.25rem 0',
                                                        fontWeight: ((sub.path || item.path) === pathname && hash === sub.hash) ? '600' : '400'
                                                    }}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <Link to="/contacts" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }} onClick={() => setMobileMenuOpen(false)}>
                                Связаться
                            </Link>
                        </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
