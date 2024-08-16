import React from 'react';
import data from '../assets/Profiles_Data.json';

const PortfolioProfiles = () => {
    return (
        <div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-8">
                    Board Members
            </h3>
            <div className='mt-2 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {data.boardmembers.map((boardmembers, index) => (
                    <div className="flex flex-col justify-center max-w-xs p-6 rounded-xl sm:px-12 bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10">
                    <img src={boardmembers.image} alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 dark:bg-gray-500 aspect-square" />
                    <div className="space-y-4 text-center divide-y divide-gray-700 dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-base font-semibold">{boardmembers.name}</h2>
                            <p className="px-5 text-xs text-gray-400 dark:text-gray-600">{boardmembers.position}</p>
                        </div>
                        <div className="flex justify-center pt-2 space-x-4 align-center">
                            <a rel="noopener noreferrer" href={boardmembers.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                <img
                                    alt=""
                                    src={boardmembers.link1iconsrc}
                                    className="size-4 rounded-full object-cover"
                                />
                            </a>
                            <a rel="noopener noreferrer" href={boardmembers.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                <img
                                    alt=""
                                    src={boardmembers.link2iconsrc}
                                    className="size-4 rounded-full object-cover"
                                />
                            </a>
                            <a rel="noopener noreferrer" href={boardmembers.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                <img
                                    alt=""
                                    src={boardmembers.link4iconsrc}
                                    className="size-4 rounded-full object-cover"
                                />
                            </a>
                            <a rel="noopener noreferrer" href={boardmembers.link3} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                <img
                                    alt=""
                                    src={boardmembers.link4iconsrc}
                                    className="size-4 rounded-full object-cover"
                                />
                            </a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Experts
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8 p-10 m-16'>
                {data.technicalexperts.map((technicalexperts, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={technicalexperts.image}
                                    className="size-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{technicalexperts.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{technicalexperts.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {technicalexperts.skills[1]}
                            </p>
                        </blockquote>
                    </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Team Members
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-4 lg:gap-8 p-10 m-16'>
                {data.technicalteammembers.map((technicalteammembers, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={technicalteammembers.image}
                                    className="size-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{technicalteammembers.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{technicalteammembers.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {technicalteammembers.skills[1]}
                            </p>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioProfiles;