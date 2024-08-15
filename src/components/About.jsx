import React from 'react';

const About = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-4 sm:p-8">
                <h1 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl mb-4 poppins-semibold text-center'>
                    <span>We develop high quality</span> <br></br>
                </h1>
                <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-4 poppins-regular text-center">
                    <span>WEB</span><span className='grayscale hover:grayscale-0'>🌐</span> AND <span>MOBILE</span><span className='grayscale hover:grayscale-0'>📱</span> APPLICATIONS <br></br>
                </h1>
                <h1 className='text-lg md:text-2xl lg:text-2xl xl:text-2xl mb-4 poppins-semibold text-center'>
                    <span>for organizations, institutions and SMEs</span>
                </h1>
                <div className='p-0 pt-4 sm:p-8'>
                    <p className='text-sm md:text-lg lg:text-lg mb-4 poppins-regular text-center max-w-2xl'>
                        Our team is well vast in software development and is ready to help develop the applications of your choice.<br></br>
                        We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;