import React, { useState } from 'react';
import data from '../assets/Data/Profiles_Data.json';
import facebookIcon from '/static/assets/Icons/Facebook.svg';
import twitterIcon from '/static/assets/Icons/Twitter.svg';
import linkedinIcon from '/static/assets/Icons/LinkedIn.svg';
import instagramIcon from '/static/assets/Icons/Instagram.svg';
import githubIcon from '/static/assets/Icons/GitHub.svg';
import mailIcon from '/static/assets/Icons/Email.svg';
import phoneIcon from '/static/assets/Icons/Phone.svg';
import linkIcon from '/static/assets/Icons/DefaultLink.svg';

/* NOTE: I use this as a playground to test things as needed, the original page has now been removed. */

const iconMap = {
    facebook: facebookIcon,
    twitter: twitterIcon,
    linkedin: linkedinIcon,
    instagram: instagramIcon,
    github: githubIcon,
    mail: mailIcon,
    phone: phoneIcon,
    default: linkIcon,
};

const LinkWithIcon = ({ link, iconSrc }) => {
    const iconSrcUrl = iconMap[iconSrc] || null;
  
    return (
      <div className="link-with-icon">
        <a href={link} target="_blank" rel="noopener noreferrer" className='block pl-2 pr-2 mt-0 mb-0 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600'>
          <img src={iconSrcUrl} alt={iconSrc} className="icon-class size-6 rounded-full object-cover aspect-square" />
        </a>
      </div>
    );
};

const DemoForm = ({}) => {
    return (
        <div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-8">
                    Board Members
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 m-4 md:p-4'>
                {data.boardmembers.map((boardmembers, index) => (
                    <div className="mb-8 sm:break-inside-avoid m-6" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={boardmembers.avatar}
                                    className="size-14 rounded-full object-cover"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{boardmembers.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{boardmembers.position}</p>
                                </div>
                            </div>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                <span className='font-bold'>Skills:</span>
                                <p>{boardmembers.skills[0]}</p>
                                <p>{boardmembers.skills[1]}</p>
                                <p>{boardmembers.skills[2]}</p>
                            </p>
                            <hr class="h-px my-8 bg-gray-200 border-2 dark:bg-gray-700"></hr>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <LinkWithIcon link={boardmembers.link1} iconSrc={boardmembers.link1iconsrc} />
                                <LinkWithIcon link={boardmembers.link2} iconSrc={boardmembers.link2iconsrc} />
                                <LinkWithIcon link={boardmembers.link3} iconSrc={boardmembers.link3iconsrc} />
                                <LinkWithIcon link={boardmembers.link4} iconSrc={boardmembers.link4iconsrc} />
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Experts
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8 p-10 m-16'>
                {data.technicalexperts.map((technicalexperts, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={technicalexperts.image}
                                    className="size-14 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{technicalexperts.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{technicalexperts.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {technicalexperts.skills[1]}
                            </p>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <a rel="noopener noreferrer" href={technicalexperts.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalexperts.link1iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalexperts.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalexperts.link2iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalexperts.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalexperts.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalexperts.link3} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalexperts.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
            <h3 className="text-center text-sm poppins-semibold text-teal-500 sm:text-lg pb-4 mt-16">
                    Technical Team Members
            </h3>
            <div className='mt-2 sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8 p-10 m-16'>
                {data.technicalteammembers.map((technicalteammembers, index) => (
                    <div className="mb-8 sm:break-inside-avoid" key={index}>
                        <blockquote className="rounded-2xl bg-[#f9fafb] dark:bg-[#181825] border border-[#f9fafb] dark:border-[#181825] hover:border-teal-500/10 p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-4">
                                <img
                                    alt=""
                                    src={technicalteammembers.image}
                                    className="size-14 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                />
                                <div>
                                    <p className="mt-0.5 text-base poppins-semibold text-gray-900 dark:text-gray-200">{technicalteammembers.name}</p>
                                    <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">{technicalteammembers.position}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                                {technicalteammembers.skills[1]}
                            </p>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <a rel="noopener noreferrer" href={technicalteammembers.link1} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalteammembers.link1iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalteammembers.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalteammembers.link2iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalteammembers.link2} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalteammembers.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                                <a rel="noopener noreferrer" href={technicalteammembers.link3} aria-label="Link1" className="p-2 rounded-md dark:text-gray-100 text-gray-800 hover:text-violet-400 hover:dark:text-violet-600">
                                    <img
                                        alt=""
                                        src={technicalteammembers.link4iconsrc}
                                        className="size-4 rounded-full object-cover bg-gray-500 dark:bg-gray-500 aspect-square"
                                    />
                                </a>
                            </div>
                        </blockquote>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoForm;