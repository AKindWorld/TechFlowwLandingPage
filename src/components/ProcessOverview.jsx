import React, { useState, useEffect } from 'react';
import Processdata from '../assets/Data/Process_Data.json';

function ProcessOverview() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    useEffect(() => {
        setData(Processdata);
    }, []);

    return (
        <section>
            <div className="mx-6 my-8 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                    <img className="dark:invert pointer-events-none" src="/static/assets/Media/SDLC.png" alt="Software Development Life Cycle"></img>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                    {data.map((item, index) => (
                        <div
                        key={index}
                        className={`flex group items-start text-left rounded-xl border border-none hover:border-teal-200 dark:hover:border-[#D4C0FF] p-4 shadow-sm hover:ring-1 hover:ring-teal-200 dark:hover:ring-[#D4C0FF] focus:outline-none focus:ring ${activeIndex === index ? 'dropdown-active bg-teal-200 dark:bg-[#D4C0FF]' : 'bg-white dark:bg-[#181825]'}`}
                        onClick={() => handleClick(index)}
                        >
                            <span className="inline-block rounded-lg bg-gray-50 dark:bg-gray-700 p-3 px-4 mt-4 text-sm md:text-md lg:text-lg">
                                {item.phase_number.toString().padStart(2, '0')}
                            </span>
                            <div className='p-2 ml-2'>
                                <h2 className={`mt-2 font-bold text-base md:text-md lg:text-lg ${activeIndex === index ? 'text-gray-800' : ''}`}>
                                    {item.phase_name}
                                </h2>
                                <p className={`font-light text-sm md:text-base lg:text-base min-w-lg' ${activeIndex === index ? 'hidden' : 'block'}`}>
                                    {item.phase_description}
                                </p>
                                <p className={`sm:mt-1 text-sm md:text-base mt-2 text-gray-600 dark:text-gray-700 font-medium ${activeIndex === index ? 'block group-bg-teal-200' : 'hidden'}`}>
                                    {item.phase_desc_long}
                                </p>
                            </div>
                            {/* <div className={`dropdown-arrow ${activeIndex === index ? 'dropdown-arrow-active' : ''} block mt-6 dark:bg-slate-500 p-2 rounded-lg`}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 12.293C14.8944 12.4805 14.9998 12.7348 14.9998 13C14.9998 13.2652 14.8944 13.5195 14.707 13.707L10.707 17.707C10.5194 17.8945 10.2651 17.9998 9.99997 17.9998C9.73481 17.9998 9.4805 17.8945 9.29297 17.707L5.29297 13.707C5.11081 13.5184 5.01002 13.2658 5.0123 13.0036C5.01457 12.7414 5.11974 12.4906 5.30515 12.3052C5.49056 12.1198 5.74137 12.0146 6.00357 12.0123C6.26577 12.01 6.51837 12.1108 6.70697 12.293L8.99997 14.586V3C8.99997 2.73478 9.10533 2.48043 9.29286 2.29289C9.4804 2.10536 9.73475 2 9.99997 2C10.2652 2 10.5195 2.10536 10.7071 2.29289C10.8946 2.48043 11 2.73478 11 3V14.586L13.293 12.293C13.4805 12.1055 13.7348 12.0002 14 12.0002C14.2651 12.0002 14.5194 12.1055 14.707 12.293Z" fill="black"/>
                                </svg>
                            </div> */}
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}

export default ProcessOverview;