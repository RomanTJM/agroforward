import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const GrowthChart = ({ data }) => (
    <section className="section bg-white" style={{ overflow: 'hidden' }}>
        <div className="container">
            <div className="section-head text-center">
                <h2><TrendingUp className="inline-icon text-accent" /> Динамика роста поставок</h2>
                <p className="subtitle">Объем реализованной продукции (в тоннах)</p>
            </div>

            <motion.div
                className="chart-container"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={data} margin={{ top: 10, right: 15, left: 15, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#04523A" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#04523A" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                        <XAxis
                            dataKey="year"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6b7280', fontSize: 11 }}
                            dy={10}
                            padding={{ left: 5, right: 5 }}
                            interval={0}
                        />
                        <YAxis hide={true} domain={[0, 7000]} />
                        <Tooltip
                            cursor={{ stroke: 'rgba(4, 82, 58, 0.2)', strokeWidth: 2 }}
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="custom-tooltip">
                                            <p className="label">{`${label} г.`}</p>
                                            <p className="intro">{`Объем: `} <span>{`${payload[0].value.toLocaleString()} тонн`}</span></p>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="volume"
                            stroke="#04523A"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorVolume)"
                            animationDuration={2000}
                            dot={{ r: 4, fill: '#04523A', stroke: '#fff', strokeWidth: 2 }}
                            activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2, fill: 'var(--color-accent)' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <div className="chart-info text-center mt-4">
                    <p className="text-muted"><small>* Данные на основе реализованных контрактов за 2018–2025 гг. Общий объем превысил 20 700 тонн.</small></p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default GrowthChart;
