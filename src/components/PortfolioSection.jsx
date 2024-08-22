import React, { useState } from 'react';
import PortfolioProfiles from './PortfolioProfiles';
import Testimonials from './Testimonials';

const Portfolio = () => {
    const [selectedTab, setSelectedTab] = useState('Profiles');

    const renderContent = () => {
        switch (selectedTab) {
            case 'Profiles':
                return  <div className='h-auto content-center poppins-bold text-2xl' id="#profiles">
                            <PortfolioProfiles/>
                        </div>;
            case 'Process Overview':
                return  <div className='h-auto content-center text-center poppins-bold text-2xl' id="process">
                            Process Overview Content
                        </div>;
            case 'Achievements':
                return  <div className='h-auto content-center poppins-bold text-2xl' id="testimonials">
                            <Testimonials/>
                        </div>;
            default:
                return <div>Profiles Content</div>;
        }
    };

    const getTabClassName = (tabName) => {
        return `shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-teal-200 hover:text-gray-700 ${selectedTab === tabName ? 'bg-teal-300' : ''}`;
    };

    return (
        <div id="portfolio">
            <div className="sm:hidden">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select id="Tab" className="w-full rounded-md border-gray-200" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
                    <option value="Profiles">Profiles</option>
                    <option value="Process Overview">Process Overview</option>
                    <option value="Achievements">Achievements</option>
                </select>
            </div>

            <div className="hidden sm:block">
                <nav className="flex gap-6 justify-center pt-28" aria-label="Tabs">
                    <a
                        href="#portfolio"
                        className={getTabClassName('Profiles')}
                        onClick={() => setSelectedTab('Profiles')}
                    >
                        Profile
                    </a>

                    <a
                        href="#portfolio"
                        className={getTabClassName('Process Overview')}
                        onClick={() => setSelectedTab('Process Overview')}
                    >
                        Process Overview
                    </a>

                    <a
                        href="#portfolio"
                        className={getTabClassName('Achievements')}
                        onClick={() => setSelectedTab('Achievements')}
                    >
                        Achievements
                    </a>
                </nav>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default Portfolio;