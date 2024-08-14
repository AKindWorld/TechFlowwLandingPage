import React from 'react';

const About = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="p-8">
                <h1 className='text-3xl mb-4 poppins-semibold text-center'>
                    <span>We develop high quality</span> <br></br>
                </h1>
                <h1 className="text-4xl mb-4 poppins-regular text-center">
                    <span>WEB</span><span className='grayscale hover:grayscale-0'>🌐</span> AND <span>MOBILE</span><span className='grayscale hover:grayscale-0'>📱</span> APPLICATIONS <br></br>
                </h1>
                <h1 className='text-2xl mb-4 poppins-semibold text-center'>
                    <span>for organizations, institutions and SMEs</span>
                </h1>
                <div className='p-8'>
                    <p className='text-lg mb-4 poppins-regular text-center max-w-2xl'>
                        Our team is well vast in software development and is ready to help develop the applications of your choice.<br></br>
                        We take responsibility for building custom software solutions that caters for automation of your business processes and improve efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;