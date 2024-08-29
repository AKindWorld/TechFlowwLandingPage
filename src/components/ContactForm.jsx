import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const ContactForm = () => {
    const [submit, setSubmit] = useState(false);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userInput, setUserInput] = useState('');
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
    const [isValidateClicked, setIsValidateClicked] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [validationSuccess, setValidationSuccess] = useState('');

    useEffect(() => {
        setNum1(Math.floor(Math.random() * 30) + 1);
        setNum2(Math.floor(Math.random() * 30) + 1);
      }, []);
    
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };
    
    const handleValidateClick = (e) => {
        e.preventDefault();
        setIsValidateClicked(true);
        
        if (parseInt(userInput, 10) === num1 + num2) {
          setIsSubmitEnabled(true);
          setValidationSuccess('Success! You may now submit the form.');
          setValidationError('');
        } else {
          setIsSubmitEnabled(false);
          setValidationSuccess('');
          setValidationError('Incorrect captcha. Please try again.');
        }
    };

    const [formData, setFormData] = useState({
        "entry.2056271310": "",
        "entry.381005483": "",
        "entry.648187125": "",
        "entry.942104210": "",
        "entry.2053105548": "",
        "entry.830057170": ""
    });
    const [showOtherField, setShowOtherField] = useState(false);

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
                                    <div className='flex flex-col-reverse'>
                                        <label className="sr-only" htmlFor="entry.2056271310">Name</label>
                                        <input
                                            required
                                            className="peer w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                            placeholder="Name"
                                            type="text"
                                            id="name"
                                            name="entry.2056271310"
                                            onChange={handleInputData("entry.2056271310")}
                                            value={formData["entry.2056271310"]}
                                            autoComplete="off"
                                        />
                                        <p class="items-center mb-2 text-xs text-slate-500 peer-placeholder-shown:h-0 peer-placeholder-shown:opacity-0 h-max opacity-100 transition-all duration-300">
                                            Name
                                        </p>                                        
                                    </div>
                                    <div className='flex flex-col-reverse'>
                                        <label className="sr-only" htmlFor="entry.381005483">Email</label>
                                        <input
                                            required
                                            className="peer w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData["entry.381005483"]}
                                            onChange={handleInputData("entry.381005483")}
                                            autoComplete="off"
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        />
                                        <p class="items-center mb-2 text-xs text-slate-500 peer-placeholder-shown:h-0 peer-placeholder-shown:opacity-0 h-max opacity-100 transition-all duration-300">
                                            Email
                                        </p>                                        
                                    </div>
                                </fieldset>

                                <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className='flex flex-col-reverse'>
                                        <label className="sr-only" htmlFor="entry.648187125">Country</label>
                                        <input
                                            required
                                            className="peer w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                            placeholder="Country"
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData["entry.648187125"]}
                                            onChange={handleInputData("entry.648187125")}
                                            autoComplete="off"
                                        />
                                        <p class="items-center mb-2 text-xs text-slate-500 peer-placeholder-shown:h-0 peer-placeholder-shown:opacity-0 h-max opacity-100 transition-all duration-300">
                                            Country
                                        </p>
                                    </div>
                                    <div className='phone-number-group flex flex-col-reverse'>
                                        <label className="sr-only" htmlFor="entry.942104210">Phone</label>
                                            <input
                                                required
                                                className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825] peer"
                                                placeholder="Phone Number"
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData["entry.942104210"]}
                                                onChange={handleInputData("entry.942104210")}
                                                autoComplete="off"
                                            />
                                            <p class="items-center mb-2 text-xs text-slate-500 peer-placeholder-shown:h-0 peer-placeholder-shown:opacity-0 h-max opacity-100 transition-all duration-300">
                                                Country code + Phone Number
                                            </p>
                                    </div>
                                </fieldset>

                                <hr class="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

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

                                <hr class="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                                
                                <div className="text-sm text-gray-600 dark:text-gray-300 mt-8">Briefly enter some details about the reason for contacting us:</div>

                                <fieldset className='flex flex-col-reverse'>
                                    <label className="sr-only" htmlFor="entry.830057170">Details</label>

                                    <textarea
                                        required
                                        className="peer w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]"
                                        placeholder="Details"
                                        rows="8"
                                        id="message"
                                        name="message"
                                        value={formData["entry.830057170"]}
                                        onChange={handleInputData("entry.830057170")}
                                        autoComplete={false}
                                    ></textarea>
                                    <p class="items-center mb-2 text-xs text-slate-500 peer-placeholder-shown:h-0 peer-placeholder-shown:opacity-0 h-max opacity-100 transition-all duration-300">
                                        Details
                                    </p>
                                </fieldset>

                                <hr class="w-48 h-1 my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>

                                <fieldset>
                                    <div className="captcha-field text-sm w-full">
                                        <label className="text-sm">Captcha: </label>
                                        <label>{`${num1} + ${num2} = `}</label>
                                        <input placeholder={`Between ${num1 + num2 - Math.floor(Math.random() * 3)} - ${num1 + num2 + 2} `} type="number" value={userInput} onChange={handleInputChange} className="peer w-max rounded-lg border-gray-200 p-3 text-sm dark:bg-[#181825]" />
                                        <button type="button" onClick={handleValidateClick} className="mx-2 p-3 px-4 bg-slate-300 dark:bg-[#D4C0FF] dark:text-black">Validate</button>
                                        {validationError && (
                                            <p className="mt-2 text-xs text-red-500">
                                            {validationError}
                                            </p>
                                        )}
                                        {validationSuccess && (
                                            <p className="mt-2 text-xs text-green-500">
                                            {validationSuccess}
                                            </p>
                                        )}
                                        <p class="items-center mt-2 text-xs text-slate-500 h-0 opacity-0 peer-focus:h-max peer-focus:opacity-100 transition-all duration-300">
                                            This is a necessary step to prevent spam. Please bear with us.
                                        </p>
                                    </div>
                                </fieldset>

                                <div className="mt-4 sm:flex">
                                    <button
                                    type="submit"
                                    disabled={!isSubmitEnabled || !isValidateClicked}
                                    className="peer inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Submit
                                    </button>
                                    <p class="items-center mt-2 text-xs text-slate-500 h-0 opacity-0 peer-disabled:h-max peer-disabled:opacity-100 transition-all duration-300 sm:w-56 sm:ml-4">
                                        Fill up the captcha above and click the validate button to enable Submit.
                                    </p>
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