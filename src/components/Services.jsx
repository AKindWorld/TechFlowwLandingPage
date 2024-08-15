import React from 'react';
import ServicesTemplate from './Services_Template';

const Services = () => {
    return (
        <div id="services" className='h-auto p-10 sm:p-15 md:p-20'>
            <h3 className="text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                Services
            </h3>
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-16">
                Work we do
            </h2>
            <div>
                <ServicesTemplate />
            </div>
        </div>
    );
};

export default Services;