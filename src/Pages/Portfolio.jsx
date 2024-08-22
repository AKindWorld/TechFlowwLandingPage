import React from 'react';
import NavBar from '../components/NavBar';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import { Analytics } from '@vercel/analytics/react';

function Portfolio() {
    return (
        <div>
            <NavBar />
            <PortfolioSection />
            <Footer />
            <Analytics />
        </div>
    );
}

export default Portfolio;