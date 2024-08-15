import React, { useState } from 'react';

const Portfolio = () => {
    const [selectedTab, setSelectedTab] = useState('Profiles');

    const renderContent = () => {
        switch (selectedTab) {
            case 'Profiles':
                return  <div className='h-screen content-center text-center poppins-bold text-2xl'>
                            Profiles Content
                        </div>;
            case 'Process Overview':
                return  <div className='h-screen content-center text-center poppins-bold text-2xl'>
                            Process Overview Content
                        </div>;
            case 'Achievements':
                return  <div className='h-screen content-center text-center poppins-bold text-2xl'>
                            Achievements Content
                        </div>;
            default:
                return <div>Profiles Content</div>;
        }
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
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        onClick={() => setSelectedTab('Profiles')}
                    >
                        Profile
                    </a>

                    <a
                        href="#portfolio"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        onClick={() => setSelectedTab('Process Overview')}
                    >
                        Process Overview
                    </a>

                    <a
                        href="#portfolio"
                        className="shrink-0 rounded-lg p-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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