import React from 'react';
import ProjectShowcaseCard from './ProjectShowcaseCard';

const ProjectShowcase = () => {
    return (
        <section id="projects" className='md:mt-24'>
            <h3 className="mt-8 text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                Projects
            </h3>
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-16">
                What we've worked on
            </h2>
            <div>
                <ProjectShowcaseCard />
            </div>
        </section>
    );
};

export default ProjectShowcase;