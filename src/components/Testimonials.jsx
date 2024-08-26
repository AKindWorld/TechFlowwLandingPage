import React from 'react';
import Testimonials_Template from './Testimonials_Template';

const Testimonials = () => {
    return (
        <section id="testimonials" className="">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h3 className="text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                    Testimonials
                </h3>
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-16">
                    We've worked with a lot of amazing clients
                </h2>

                <div className="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 font-medium">
                    <Testimonials_Template />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;