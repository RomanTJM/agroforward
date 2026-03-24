import React from 'react';
import { BarChart3, Gavel } from 'lucide-react';

const FinancialsGovernance = () => (
    <section className="section">
        <div className="container">
            <div className="grid-lg">
                <div id="financials" className="financials" style={{ scrollMarginTop: '100px' }}>
                    <h2 className="mb-4"><BarChart3 className="inline-icon text-primary" /> Финансовые показатели</h2>
                    <p className="text-muted mb-4">Подробная финансовая модель и аудированная <span id="reports">отчетность</span> предоставляются по запросу после подписания NDA.</p>

                    <div className="fin-stats-grid">
                        <div className="fin-stat">
                            <div className="fin-val text-primary">+20%</div>
                            <div className="fin-label">Ежегодный рост ПС</div>
                        </div>
                        <div className="fin-stat">
                            <div className="fin-val text-primary">&gt;6 млн</div>
                            <div className="fin-label">Объем поставок, кг (2025)</div>
                        </div>
                        <div className="fin-stat">
                            <div className="fin-val">50+</div>
                            <div className="fin-label">Крупных B2B клиентов</div>
                        </div>
                    </div>
                </div>

                <div id="governance" className="governance" style={{ scrollMarginTop: '100px' }}>
                    <h2 className="mb-4"><Gavel className="inline-icon text-primary" /> Корпоративное управление</h2>
                    <ul className="gov-list">
                        <li><strong>Прозрачность:</strong> Регулярное раскрытие информации, открытая коммуникация.</li>
                        <li><strong>Подотчетность:</strong> Четкое разделение полномочий, внешний аудит.</li>
                        <li><strong>Ответственность:</strong> Защита интересов сторон, соблюдение стандартов и ESG-подхода.</li>
                        <li><strong>Справедливость:</strong> Защита прав миноритарных инвесторов, прозрачные решения.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default FinancialsGovernance;
