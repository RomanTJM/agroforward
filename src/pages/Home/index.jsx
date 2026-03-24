import React from 'react';
import AnimatedPage from '../../components/common/AnimatedPage';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import { features } from '../../constants/homeData';
import './Home.css';

const Home = () => {
    return (
        <AnimatedPage>
            <Hero />
            <Features features={features} />
            <CTA />
        </AnimatedPage>
    );
};

export default Home;
