import React from 'react';
import data from '../assets/Data/Projects_Data.json';

const ProjectShowcaseCard = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 m-8 md:columns-2 sm:gap-6 lg:columns-3 lg:gap-8 font-medium'>
            {data.projects.map((project, index) => (
                <article key={index} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg m-4 md:m-0">
                    <img alt="" src={project.image} className="h-48 w-full object-cover pointer-events-none"
                    />
                    <div className="bg-white dark:bg-[#181825] p-4 sm:p-6">
                        <span className='text-xs text-gray-500 dark:text-gray-400'>{project.domain}</span>
                        <a>
                            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">{project.heading}</h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-300">
                            {project.description}
                        </p>
                        
                        <div className='flex flex-row'>
                            <a href={project.github} className="mt-4 mr-4 inline-flex items-center gap-2 rounded border border-[#181825] bg-[#181825] dark:bg-[#D4C0FF] px-4 py-3 text-white dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black focus:outline-none focus:ring transition-all duration-150">
                                <img src="/static/assets/Icons/ArrowRightUp.svg" alt="GH Logo" className='pointer-events-none text-sm size-5 invert dark:invert-0 dark:group-hover:invert-0'/>
                                <span className="text-sm font-medium"> Visit </span>
                            </a>
                            {/* <a href={project.link} className="mt-4 mr-4 inline-flex items-center gap-2 rounded border border-transparent bg-transparent px-4 py-3 text-black dark:text-white hover:bg-[#D4C0FF] hover:text-black hover:border-[#D4C0FF] focus:outline-none focus:ring group transition-all duration-150">
                                <div className='flex flex-row-reverse'>
                                    <img src="/static/assets/Icons/ArrowRightUp.svg" alt="GH Logo" className='pointer-events-none text-sm size-5 dark:invert dark:group-hover:invert-0'/>
                                    <span className="text-sm font-medium"> Visit </span>
                                </div>
                            </a> */}
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
};

export default ProjectShowcaseCard;