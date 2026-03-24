import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';

const cities = [
    { name: 'Москва',        x: 205, y: 158, active: true,  hub: true  },
    { name: 'Тула',          x: 185, y: 210, active: true,  hub: false },
    { name: 'Липецк',        x: 252, y: 242, active: true,  hub: false },
    { name: 'Воронеж',       x: 238, y: 288, active: true,  hub: false },
    { name: 'Н. Новгород',   x: 318, y: 110, active: true,  hub: false },
    { name: 'Казань',        x: 400, y: 118, active: true,  hub: false },
    { name: 'С.-Петербург',  x: 98,  y: 62,  active: false, hub: false },
    { name: 'Самара',        x: 408, y: 200, active: false, hub: false },
    { name: 'Краснодар',     x: 165, y: 290, active: false, hub: false },
];

const activeEdges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [2, 3], [4, 5],
];

const SchematicMap = () => (
    <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="geo-map-svg">
        <defs>
            <radialGradient id="mapBg" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#e8f2ed" />
                <stop offset="100%" stopColor="#d4e8de" />
            </radialGradient>
            <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(4,82,58,0.18)" />
                <stop offset="100%" stopColor="rgba(4,82,58,0)" />
            </radialGradient>
            <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(4,82,58,0.35)" />
            </filter>
            <style>{`
                @keyframes pulseGreen {
                    0%   { r: 10; opacity: 0.6; }
                    100% { r: 26; opacity: 0; }
                }
                @keyframes pulseGreenHub {
                    0%   { r: 14; opacity: 0.5; }
                    100% { r: 38; opacity: 0; }
                }
                @keyframes pulseRed {
                    0%   { r: 9;  opacity: 0.55; }
                    100% { r: 24; opacity: 0; }
                }
                .pulse-g  { animation: pulseGreen    2.4s ease-out infinite; }
                .pulse-g2 { animation: pulseGreen    2.4s ease-out infinite 0.8s; }
                .pulse-hub  { animation: pulseGreenHub 2.8s ease-out infinite; }
                .pulse-hub2 { animation: pulseGreenHub 2.8s ease-out infinite 1.0s; }
                .pulse-r  { animation: pulseRed      2.6s ease-out infinite; }
                .pulse-r2 { animation: pulseRed      2.6s ease-out infinite 1.3s; }
            `}</style>
        </defs>

        <rect width="480" height="360" rx="16" fill="url(#mapBg)" />

        {Array.from({ length: 23 }, (_, col) =>
            Array.from({ length: 17 }, (_, row) => (
                <circle
                    key={`g-${col}-${row}`}
                    cx={col * 22 + 11}
                    cy={row * 22 + 11}
                    r="1.2"
                    fill="rgba(4,82,58,0.12)"
                />
            ))
        )}

        {activeEdges.map(([a, b], i) => (
            <line
                key={`edge-${i}`}
                x1={cities[a].x} y1={cities[a].y}
                x2={cities[b].x} y2={cities[b].y}
                stroke="rgba(4,82,58,0.22)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
            />
        ))}

        {cities.filter(c => !c.active).map((c, i) => (
            <line
                key={`fut-line-${i}`}
                x1={cities[0].x} y1={cities[0].y}
                x2={c.x} y2={c.y}
                stroke="rgba(213,97,84,0.18)"
                strokeWidth="1"
                strokeDasharray="4 5"
            />
        ))}

        <circle cx={cities[0].x} cy={cities[0].y} r="42" fill="url(#hubGlow)" />
        <circle
            cx={cities[0].x} cy={cities[0].y} r="30"
            fill="none"
            stroke="rgba(4,82,58,0.15)"
            strokeWidth="1"
            strokeDasharray="6 4"
        />

        {cities.filter(c => !c.active).map((city, i) => (
            <g key={`fut-${i}`}>
                <circle cx={city.x} cy={city.y} r="9" fill="rgba(213,97,84,0.55)" className="pulse-r"  style={{ animationDelay: `${i * 0.4}s` }} />
                <circle cx={city.x} cy={city.y} r="9" fill="rgba(213,97,84,0.35)" className="pulse-r2" style={{ animationDelay: `${i * 0.4 + 1.3}s` }} />
                <circle
                    cx={city.x} cy={city.y} r="7"
                    fill="white"
                    stroke="rgba(213,97,84,0.65)"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                />
                <text
                    x={city.x}
                    y={city.y - 15}
                    textAnchor="middle"
                    fill="rgba(213,97,84,0.9)"
                    fontSize="11"
                    fontFamily="Outfit, sans-serif"
                    fontWeight="600"
                >{city.name}</text>
            </g>
        ))}

        {cities.filter(c => c.active).map((city, i) => (
            <g key={`act-${i}`} filter={city.hub ? 'url(#dotShadow)' : undefined}>
                {city.hub ? (
                    <>
                        <circle cx={city.x} cy={city.y} r="14" fill="rgba(4,82,58,0.5)" className="pulse-hub"  />
                        <circle cx={city.x} cy={city.y} r="14" fill="rgba(4,82,58,0.3)" className="pulse-hub2" />
                    </>
                ) : (
                    <>
                        <circle cx={city.x} cy={city.y} r="10" fill="rgba(4,82,58,0.45)" className="pulse-g"  style={{ animationDelay: `${i * 0.35}s` }} />
                        <circle cx={city.x} cy={city.y} r="10" fill="rgba(4,82,58,0.25)" className="pulse-g2" style={{ animationDelay: `${i * 0.35 + 0.8}s` }} />
                    </>
                )}
                {city.hub && (
                    <circle cx={city.x} cy={city.y} r="16" fill="rgba(4,82,58,0.12)" />
                )}
                <circle
                    cx={city.x} cy={city.y}
                    r={city.hub ? 10 : 7}
                    fill={city.hub ? '#04523A' : 'rgba(4,82,58,0.85)'}
                    stroke="white"
                    strokeWidth={city.hub ? 2.5 : 2}
                />
                {city.hub && (
                    <circle cx={city.x} cy={city.y} r="4" fill="white" opacity="0.8" />
                )}
                <text
                    x={city.x}
                    y={city.y - (city.hub ? 22 : 16)}
                    textAnchor="middle"
                    fill="#04523A"
                    fontSize={city.hub ? 13 : 11}
                    fontFamily="Outfit, sans-serif"
                    fontWeight={city.hub ? '800' : '600'}
                >{city.name}</text>
            </g>
        ))}

        <g transform="translate(16, 316)">
            <circle cx="8" cy="7" r="6" fill="#04523A" stroke="white" strokeWidth="1.5" />
            <text x="20" y="11" fill="#04523A" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600">Активные регионы</text>
        </g>
        <g transform="translate(160, 316)">
            <circle cx="8" cy="7" r="6" fill="white" stroke="rgba(213,97,84,0.6)" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="20" y="11" fill="rgba(213,97,84,0.85)" fontSize="11" fontFamily="Outfit, sans-serif" fontWeight="600">Планы расширения</text>
        </g>
    </svg>
);

const GeoPartnersSection = () => (
    <section className="section bg-light">
        <div className="container">

            <motion.div
                id="geo"
                className="geo-block"
                style={{ scrollMarginTop: '100px' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="geo-block-header">
                    <h2><MapPin className="inline-icon text-accent" /> География работы</h2>
                </div>

                <div className="geo-block-body">
                <div className="geo-text-col">
                    <h4>Основные регионы деятельности:</h4>
                    <ul className="geo-list">
                        <li><strong>Центральный ФО:</strong> Московская, Липецкая, Воронежская, Тульская области</li>
                        <li><strong>Центрально-Черноземный регион:</strong> Основной рынок сбыта</li>
                        <li><strong>Приволжский ФО:</strong> Развивающееся направление</li>
                    </ul>

                    <h4 className="mt-4">Логистическая инфраструктура:</h4>
                    <ul className="geo-list">
                        <li>Партнерства с логистическими компаниями</li>
                        <li>Склады временного хранения в ключевых регионах</li>
                        <li>Система GPS-мониторинга всех поставок</li>
                    </ul>

                    <h4 className="mt-4">Планы расширения:</h4>
                    <ul className="geo-list">
                        <li>Выход на рынки Северо-Западного ФО к 2027 году</li>
                        <li>Развитие присутствия на Юге России</li>
                        <li>Усиление позиций в Поволжье</li>
                    </ul>
                </div>

                <div className="geo-map-col">
                    <SchematicMap />
                </div>
                </div>
            </motion.div>

            <motion.div
                id="partners"
                className="partners-block"
                style={{ scrollMarginTop: '100px' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <h2 className="mb-4"><Award className="inline-icon text-primary" /> Наши партнеры</h2>
                <p className="mb-4">За 8+ лет работы мы стали надежным партнером для десятков крупных предприятий. Гордимся долгосрочными отношениями:</p>

                <div className="partners-types-grid">
                    <div className="partner-type">
                        <h4>Агрохолдинги полного цикла</h4>
                        <p className="text-muted text-sm">Долгосрочные контракты (12-36 мес.) для внутренних перерабатывающих мощностей.</p>
                    </div>
                    <div className="partner-type">
                        <h4>Мясоперерабатывающие комбинаты</h4>
                        <p className="text-muted text-sm">Производители колбасных изделий, полуфабрикатов и консервов. Индивидуальные условия.</p>
                    </div>
                    <div className="partner-type">
                        <h4>Производственные предприятия</h4>
                        <p className="text-muted text-sm">Фабрики-кухни, общепит, розничные сети с собственным производством.</p>
                    </div>
                </div>
            </motion.div>

        </div>
    </section>
);

export default GeoPartnersSection;
