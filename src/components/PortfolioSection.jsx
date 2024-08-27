import React, { useState } from 'react';
import PortfolioProfiles from './PortfolioProfiles';
import ProcessOverview from './ProcessOverview';
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
                           <ProcessOverview/>
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
        return `shrink-0 rounded-lg p-4 text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-teal-200 hover:text-gray-700 ${selectedTab === tabName ? 'bg-teal-300 dark:text-gray-800' : ''}`;
    };

    return (
        <div id="portfolio">
            <div className="sm:hidden m-auto mt-[20vh] w-max lg:m-4">
                <label htmlFor="Tab" className="sr-only">Tab</label>
                <select id="Tab" className="w-full rounded-md border-gray-200 dark:bg-[#181825] outline-none border-none" value={selectedTab} onChange={(e) => setSelectedTab(e.target.value)}>
                    <option className="w-full" value="Profiles">Profiles</option>
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