import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactForm = () => {
    const [submit, setSubmit] = useState(false);
    
    const [formData, setFormData] = useState({
        "entry.2056271310": "",
        "entry.381005483": "",
        "entry.648187125": "",
        "entry.942104210": "",
        "entry.2053105548": "",
        "entry.830057170": ""
    });

    const handleInputData = (input) => (e) => {
        const { value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [input]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);

        

        let secreturl = import.meta.env.VITE_REACT_APP_CONTACT_FORM_URL;
        let url = `https://docs.google.com/forms/d/e/${secreturl}/formResponse?entry.2056271310=${formData["entry.2056271310"]}&entry.381005483=${formData["entry.381005483"]}&entry.648187125=${formData["entry.648187125"]}&entry.942104210=${formData["entry.942104210"]}&entry.2053105548=${formData["entry.2053105548"]}&entry.830057170=${formData["entry.830057170"]}`

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            mode: 'no-cors',
        });
    }

    return (
        <section className="h-auto">
            <div className="mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <img src="/static/assets/Media/Logo-Text-Light-Transparent.png" alt="Logo" className="max-w-[15vw] hidden md:block"/>
                        <p className="max-w-xl text-2xl text-gray-800 dark:text-gray-200 font-bold">
                            TechFloww IT Services
                        </p>

                        <div className="mt-8">
                            <Link to="mailto:info@techflowwitservices.in">
                                <span className='text-lg font-bold text-gray-500 dark:text-gray-300'> Email: <br></br>
                                    <a href="mailto:info@techflowwitservices.in" className="hover:underline text-base"> info@techflowwitservices.in </a>
                                </span>
                            </Link>
                            <br></br>
                            <Link to="tel:+919903869439">
                                <span className='text-lg font-bold text-gray-500 dark:text-gray-300'> Phone Number: <br></br>
                                    <a href="tel:+919903869439" className="hover:underline text-base"> +91 99038 69439 </a>
                                </span>
                            </Link>
                            <br></br>
                            <Link to="">
                                <span className='text-lg font-bold text-gray-500 dark:text-gray-300'> Office Address: <br></br>
                                    <a href="" className="hover:underline text-base"> Kolkata, India </a>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white dark:bg-[#181825] p-8 shadow-lg lg:col-span-3 lg:p-12">
                        {submit ? (
                            <div className="afterForm">
                                <span className='text-xl font-bold'>Submission Successful!</span>
                                <p className='text-base font-medium mt-4 text-gray-600'>
                                    We will get back to you soon at <span className='text-gray-800 font-bold underline'>{formData["entry.381005483"]}</span> and <span className='text-gray-800 font-bold underline'>{formData["entry.942104210"]}</span>. 
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} target="_self" className="space-y-4">
                                <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="entry.2056271310">Name</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825] focus:outline-none focus:border-[#D4C0FF] focus:ring-1"
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                            name="entry.2056271310"
                                            onChange={handleInputData("entry.2056271310")}
                                            value={formData["entry.2056271310"]}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="entry.381005483">Email</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData["entry.381005483"]}
                                            onChange={handleInputData("entry.381005483")}
                                            autoComplete="off"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        />
                                    </div>
                                </fieldset>

                                <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="entry.648187125">Country</label>
                                        <input
                                            required
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                            placeholder="Country"
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData["entry.648187125"]}
                                            onChange={handleInputData("entry.648187125")}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className='phone-number-group'>
                                        <label className="sr-only" htmlFor="entry.942104210">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825] peer"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData["entry.942104210"]}
                                            onChange={handleInputData("entry.942104210")}
                                            autoComplete="off"
                                        />
                                        <p class="items-center mt-2 text-xs text-slate-500 h-0 opacity-0 peer-focus:h-max peer-focus:opacity-100 transition-all duration-300">
                                            Please include your country code too, like: +01 1234567890
                                        </p>
                                    </div>
                                </fieldset>

                                <div className="text-sm text-gray-600 dark:text-gray-300 mt-8">What are you enquiring about?</div>

                                <fieldset className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="entry.2053105548_serviceenquiries"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 dark:text-gray-300 dark:hover:text-[#D4C0FF] hover:border-black dark:hover:border-[#D4C0FF] has-[:checked]:border-[#D4C0FF] has-[:checked]:bg-[#D4C0FF] has-[:checked]:text-black has-[:checked]:font-semibold dark:has-[:checked]:hover:text-black"
                                            tabIndex="0"
                                        >
                                            <input
                                                className="sr-only"
                                                id="entry.2053105548_serviceenquiries"
                                                type="radio"
                                                tabIndex="-1"
                                                name="entry.2053105548"
                                                value="Service Enquiries"
                                                checked={formData["entry.2053105548"] === 'Service Enquiries'}
                                                onChange={handleInputData("entry.2053105548")}
                                            />

                                            <span className="text-sm"> Service Enquiry </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="entry.2053105548_custompricing"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 dark:text-gray-300 dark:hover:text-[#D4C0FF] hover:border-black dark:hover:border-[#D4C0FF] has-[:checked]:border-[#D4C0FF] has-[:checked]:bg-[#D4C0FF] has-[:checked]:text-black has-[:checked]:font-semibold dark:has-[:checked]:hover:text-black"
                                            tabIndex="0"
                                        >
                                            <input
                                                className="sr-only"
                                                id="entry.2053105548_custompricing"
                                                type="radio"
                                                tabIndex="-1"
                                                name="entry.2053105548"
                                                value="Custom Pricing"
                                                checked={formData["entry.2053105548"] === 'Custom Pricing'}
                                                onChange={handleInputData("entry.2053105548")}
                                            />

                                            <span className="text-sm"> Custom Pricing </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="entry.2053105548_helpandsupport"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 dark:text-gray-300 dark:hover:text-[#D4C0FF] hover:border-black dark:hover:border-[#D4C0FF] has-[:checked]:border-[#D4C0FF] has-[:checked]:bg-[#D4C0FF] has-[:checked]:text-black has-[:checked]:font-semibold dark:has-[:checked]:hover:text-black"
                                            tabIndex="0"
                                        >
                                            <input
                                                className="sr-only"
                                                id="entry.2053105548_helpandsupport"
                                                type="radio"
                                                tabIndex="-1"
                                                name="entry.2053105548"
                                                value="Help And Support"
                                                checked={formData["entry.2053105548"] === 'Help And Support'}
                                                onChange={handleInputData("entry.2053105548")}
                                            />

                                            <span className="text-sm"> Help & Support </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="entry.2053105548_other"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 dark:text-gray-300 dark:hover:text-[#D4C0FF] hover:border-black dark:hover:border-[#D4C0FF] has-[:checked]:border-[#D4C0FF] has-[:checked]:bg-[#D4C0FF] has-[:checked]:text-black has-[:checked]:font-semibold dark:has-[:checked]:hover:text-black"
                                            tabIndex="0"
                                        >
                                            <input
                                                className="sr-only"
                                                id="entry.2053105548_other"
                                                type="radio"
                                                tabIndex="-1"
                                                name="entry.2053105548"
                                                value="Other"
                                                checked={formData["entry.2053105548"] === 'Other'}
                                                onChange={handleInputData("entry.2053105548")}
                                            />

                                            <span className="text-sm"> Other </span>
                                        </label>
                                    </div>

                                </fieldset>
                                
                                <div className="text-sm text-gray-600 dark:text-gray-300 mt-8">Briefly enter some details about the reason for contacting us:</div>

                                <fieldset>
                                    <label className="sr-only" htmlFor="entry.830057170">Details</label>

                                    <textarea
                                        required
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                        placeholder="Details"
                                        rows="8"
                                        id="message"
                                        name="message"
                                        value={formData["entry.830057170"]}
                                        onChange={handleInputData("entry.830057170")}
                                        autoComplete={false}
                                    ></textarea>
                                </fieldset>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;