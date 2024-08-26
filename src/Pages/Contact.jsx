import React, { useState } from 'react';
//import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Analytics } from '@vercel/analytics/react';
import Background from '../components/Background';

const ProductDemo = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Contact Us | TechFloww IT Services</title>
                </Helmet>
            </div>
            <div>
                <NavBar />
            </div>
            <div>
                <ContactForm />
            </div>
            <div>
                <Footer />
                <Analytics />
            </div>
            <div>
                <Background />
            </div>
        </>
    );
};

export default ProductDemo;