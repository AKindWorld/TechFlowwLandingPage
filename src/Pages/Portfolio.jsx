import React from 'react';
import NavBar from '../components/NavBar';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Analytics } from '@vercel/analytics/react';

function Portfolio() {
    return (
        <div>
            <NavBar />
            <PortfolioSection />
            <Footer />
            <Background />
            <Analytics />
        </div>
    );
}

export default Portfolio;