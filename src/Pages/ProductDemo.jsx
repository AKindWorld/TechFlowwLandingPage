import React, { useState } from 'react';
//import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar';
import DemoForm from '../components/DemoForm';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';

const ProductDemo = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Demos | TechFloww IT Services</title>
                </Helmet>
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <DemoForm />
                {/*<div className='pink-svg-bottom-2 top-0 left-0 absolute filter blur-[500px] -z-10'>
                <svg width="1045" height="1103" viewBox="0 0 1045 1103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1103V127.58C12.3484 86.5069 67.1984 3.49854 187.811 0.0518263C338.576 -4.25657 349.776 261.14 467.804 391.254C585.832 521.367 956.284 442.954 1031.24 664.406C1091.2 841.567 940.777 1030.62 858.071 1103H0Z" fill="url(#paint0_linear_679_93)"/>
                    <defs>
                    <linearGradient id="paint0_linear_679_93" x1="-1831.43" y1="-291.471" x2="217.086" y2="1157.86" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFBEDD"/>
                    <stop offset="1" stop-color="#FF23DC"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div> */}
            </div>
            <div>
                <Footer />
                <Analytics />
            </div>
        </>
    );
};

export default ProductDemo;