import React, { useState } from 'react';
import AnimatedPage from '../../components/common/AnimatedPage';
import ImageModal from '../../components/common/ImageModal';
import AboutHero from './components/AboutHero';
import TimelineSection from './components/TimelineSection';
import GrowthChart from './components/GrowthChart';
import MissionVision from './components/MissionVision';
import ValuesSection from './components/ValuesSection';
import TeamSection from './components/TeamSection';
import CertificatesSection from './components/CertificatesSection';
import GeoPartnersSection from './components/GeoPartnersSection';
import { chartData, timelineData, values, documents } from '../../constants/aboutData';
import './About.css';

const About = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <AnimatedPage>
            <AboutHero />
            <TimelineSection data={timelineData} />
            <GrowthChart data={chartData} />
            <MissionVision />
            <ValuesSection values={values} />
            <TeamSection />
            <CertificatesSection
                documents={documents}
                onPreview={(img) => setSelectedImg(img)}
            />
            <GeoPartnersSection />

            <ImageModal
                isOpen={!!selectedImg}
                onClose={() => setSelectedImg(null)}
                imgSrc={selectedImg?.src}
                title={selectedImg?.title}
            />
        </AnimatedPage>
    );
};

export default About;
