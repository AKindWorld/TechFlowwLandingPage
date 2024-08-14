import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/Logo-Text-Light-Transparent.png'


const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }


    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header className="bg-white m-10 mt-4 rounded-xl poppins-regular fixed z-10 w-[90vw]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <a className="block text-black" href="#">
                    <span className="sr-only">Home</span>
                    <img className="h-20 w-auto" src={logo} alt="TechFloww Logo"/>
                    </a>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75" href="#"> About </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75" href="#"> Services </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75" href="#"> Portfolio </a>
                        </li>

                        <li>
                        <a className="text-gray-800 transition hover:text-gray-500/75" href="#"> Contact Us </a>
                        </li>
                    </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <a
                        className="rounded-md bg-gradient-to-r from-[#FF7A00] to-[#FFD954] px-5 py-2.5 text-sm poppins-medium text-black shadow"
                        href="#"
                        >
                        DEMO OUR PRODUCTS
                        </a>
                    </div>

                    <div className="block md:hidden">
                        <button className="rounded">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
    
}


export default NavBar;