import React, { useState } from 'react';
//import emailjs from 'emailjs-com';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const ProductDemo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [option, setOption] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using emailjs library
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                // Reset form fields
                setName('');
                setEmail('');
                setPhone('');
                setOption('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
            });
    };

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
                <section className="bg-gray-100 h-screen">
                    <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:col-span-2 lg:py-12">
                                <p className="max-w-xl text-lg">
                                    TechFloww IT Services
                                    <br></br>
                                    email
                                </p>

                                <div className="mt-8">
                                    <a href="#" className="text-2xl font-bold text-[#E29016]"> phone number </a>

                                    <address className="mt-2 not-italic">office address</address>
                                </div>
                            </div>

                            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="sr-only" htmlFor="name">Name</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="sr-only" htmlFor="email">Email</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Email address"
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="sr-only" htmlFor="phone">Phone</label>
                                            <input
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                placeholder="Phone Number"
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                        <div>
                                            <label
                                                htmlFor="Option1"
                                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                                tabIndex="0"
                                            >
                                                <input
                                                    className="sr-only"
                                                    id="Option1"
                                                    type="radio"
                                                    tabIndex="-1"
                                                    name="option"
                                                    value="Option 1"
                                                    checked={option === 'Option 1'}
                                                    onChange={(e) => setOption(e.target.value)}
                                                />

                                                <span className="text-sm"> Option 1 </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="Option2"
                                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                                tabIndex="0"
                                            >
                                                <input
                                                    className="sr-only"
                                                    id="Option2"
                                                    type="radio"
                                                    tabIndex="-1"
                                                    name="option"
                                                    value="Option 2"
                                                    checked={option === 'Option 2'}
                                                    onChange={(e) => setOption(e.target.value)}
                                                />

                                                <span className="text-sm"> Option 2 </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="Option3"
                                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                                tabIndex="0"
                                            >
                                                <input
                                                    className="sr-only"
                                                    id="Option3"
                                                    type="radio"
                                                    tabIndex="-1"
                                                    name="option"
                                                    value="Option 3"
                                                    checked={option === 'Option 3'}
                                                    onChange={(e) => setOption(e.target.value)}
                                                />

                                                <span className="text-sm"> Option 3 </span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="Option4"
                                                className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                                tabIndex="0"
                                            >
                                                <input
                                                    className="sr-only"
                                                    id="Option4"
                                                    type="radio"
                                                    tabIndex="-1"
                                                    name="option"
                                                    value="Option 4"
                                                    checked={option === 'Option 4'}
                                                    onChange={(e) => setOption(e.target.value)}
                                                />

                                                <span className="text-sm"> Option 4 </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="message">Message</label>

                                        <textarea
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Message"
                                            rows="8"
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        ></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                        >
                                            Send Enquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default ProductDemo;