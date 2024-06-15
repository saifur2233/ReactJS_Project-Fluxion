import React from 'react'
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import SpecialitiesSection from './SpecialitiesSection';
import CompareServiceSection from './CompareServiceSection';
import ClientSection from './ClientSection';
import FaqSection from './FaqSection';
import QuestionSection from './QuestionSection';
import OfficeLocationSection from './OfficeLocationSection';
import TestimonialSection from './TestimonialSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceSection></ServiceSection>
            <SpecialitiesSection></SpecialitiesSection>
            <CompareServiceSection></CompareServiceSection>
            <StatsSection></StatsSection>
            <ClientSection></ClientSection>
            <FaqSection></FaqSection>
            <QuestionSection></QuestionSection>
            <TeamSection></TeamSection>
            <OfficeLocationSection></OfficeLocationSection>
            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;
