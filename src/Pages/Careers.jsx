import React from 'react';
import NavBar from '../components/NavBar';
import CareerForm from '../components/CareerForm';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Helmet } from 'react-helmet';

const Careers = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Careers | TechFloww IT Services</title>
                </Helmet>
            </div>
            <NavBar />
            <CareerForm />
            <Footer />
            <Background />
        </div>
    );
};

export default Careers;