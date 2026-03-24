import React from 'react';
import { Leaf, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';

export const features = [
    {
        icon: <Leaf className="feat-icon" />,
        title: "Исключительное Качество",
        description: "Натуральное сырье от проверенных фермерских хозяйств с полным контролем на каждом этапе."
    },
    {
        icon: <Globe2 className="feat-icon" />,
        title: "Широкая География",
        description: "Налаженная логистика позволяет нам доставлять свежее сырье по всей стране точно в срок."
    },
    {
        icon: <ShieldCheck className="feat-icon" />,
        title: "Стандарты Безопасности",
        description: "100% соответствие мировым стандартам ХАССП. Мы гарантируем безопасность каждой партии."
    },
    {
        icon: <TrendingUp className="feat-icon" />,
        title: "Стабильное Партнерство",
        description: "Обеспечиваем надежность поставок и гибкие условия для оптовых клиентов и инвесторов."
    }
];
