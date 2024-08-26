import React from 'react';
import data from '../assets/Data/Services_Data.json';

const ServicesTemplate = () => {
    return (
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.services.map((service, index) => (
                <a
                    key={index}
                    className="block rounded-xl border border-[#fff] dark:border-[#181825] p-8 shadow-lg transition hover:border-teal-500/10 hover:shadow-teal-500/10 bg-[#fff] dark:bg-[#181825]"
                    href="#"
                >
                    <img src={service.icon} className='mb-4' alt="Service Icon" />
                    <h2 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
                        {service.service_name}
                    </h2>
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-300">
                        {service.service_desc}
                    </p>
                </a>
            ))}
        </div>
    );
};

export default ServicesTemplate;