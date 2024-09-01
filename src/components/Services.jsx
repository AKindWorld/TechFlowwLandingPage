import React, { useEffect, useState, useRef } from 'react';
import ServicesTemplate from './Services_Template';

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


const Services = () => {
    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    return (
        <div id="services" className='h-auto p-10 sm:p-15 md:p-20'>
            <h3 className="text-center text-sm poppins-semibold text-sky-300 sm:text-lg pb-4">
                Services
            </h3>
            <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-3xl mb-16">
                Work we do
            </h2>
            <div ref={ref2} className={`${isVisible2 ? "opacity-100" : "opacity-0"} transition-opacity duration-700 ease-in`}>
                <ServicesTemplate />
            </div>
        </div>
    );
};

export default Services;