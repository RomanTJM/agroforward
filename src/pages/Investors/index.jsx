import React from 'react';
import AnimatedPage from '../../components/common/AnimatedPage';
import InvestorsHero from './components/InvestorsHero';
import AdvantagesGrid from './components/AdvantagesGrid';
import FinancialsGovernance from './components/FinancialsGovernance';
import StrategySection from './components/StrategySection';
import InvestmentNeeds from './components/InvestmentNeeds';

import { advantages, strategies } from '../../constants/investorsData';
import './Investors.css';

const Investors = () => {
    return (
        <AnimatedPage>
            <InvestorsHero />
            <AdvantagesGrid advantages={advantages} />
            <FinancialsGovernance />
            <StrategySection strategies={strategies} />
            <InvestmentNeeds />
        </AnimatedPage>
    );
};

export default Investors;
