import React, { useEffect, useState, useRef } from 'react';

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}


const TechStack = () => {
    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);
    
    return (
        <div ref={ref3} className={`m-4 p-4 sm:m-8 sm:p-8 ${isVisible3 ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in`}>
            <h3 className="text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                Tech Stack
            </h3>
            <h2 className="text-center text-lg font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-xl mb-16">
                Our current tech stack, and we're happy to learn and work with new technologies
            </h2>
            <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 sm:gap-6 lg:grid-cols-9 lg:gap-4 lg:m-16 md:p-16 pt-0'>
                <a className="group block text-center hover:fill-[#61DBFB] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/ReactIcon.svg" alt="React Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#61DBFB]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">React</h3>
                </a>
                <a className="group block text-center hover:fill-[#417e38] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale dark:invert group-hover:grayscale-0" src="/static/assets/Icons/NodeJSIcon.svg" alt="NodeJS Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#417e38]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">NodeJS</h3>
                </a>
                <a className="group block text-center hover:fill-[#242938] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto invert group-hover:invert-0 grayscale-[50%]" src="/static/assets/Icons/ExpressJSIcon.svg" alt="ExpressJS Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#242938]/80 dark:group-hover:text-gray-200 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">ExpressJS</h3>
                </a>
                <a className="group block text-center hover:fill-[#000] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/AngularIcon.svg" alt="Angular Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#000]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">Angular</h3>
                </a>
                <a className="group block text-center hover:fill-[#EA2D2E] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/JavaIcon.svg" alt="Java Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#EA2D2E]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">Java</h3>
                </a>
                <a className="group block text-center hover:fill-[#FF9900] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/AWSIcon.svg" alt="AWS Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#FF9900]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">AWS</h3>
                </a>
                <a className="group block text-center hover:fill-[#FFE052] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/PythonIcon.svg" alt="Python Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#FFE052]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl"><span className='group-hover:text-[#366994]'>Pyt</span>hon</h3>
                </a>
                <a className="group block text-center hover:fill-[#2396ED] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/DockerIcon.svg" alt="Docker Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#2396ED]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">Docker</h3>
                </a>
                <a className="group block text-center hover:fill-[#E6AD10] pt-4 pb-4 md:p-0" target='_blank' rel="noopener noreferrer">
                    <img className="m-auto grayscale group-hover:grayscale-0" src="/static/assets/Icons/PowerBiIcon.svg" alt="PowerBI Logo"/>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-300 group-hover:text-[#E6AD10]/80 group-hover:text-2xl group-hover:font-medium transition-all sm:text-xl">PowerBI</h3>
                </a>         
            </div>
        </div>
    );
};

export default TechStack;
