import React, { useState } from 'react';
import PortfolioProfiles from './PortfolioProfiles';
import ProcessOverview from './ProcessOverview';
import Testimonials from './Testimonials';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <div 
        className="group p-3 flex justify-between items-center cursor-pointer m-8 mx-16 rounded-lg bg-[#181825] text-white hover:bg-[#D4C0FF] hover:text-black hover:border-[#D4C0FF] focus:outline-none focus:ring transition-all duration-150" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${isOpen ? 'font-semibold' : 'font-normal' } ml-2`}>{title}</span>
        <img src="/static/assets/Icons/ChevronUpIcon.svg" className={`size-5 invert group-hover:invert-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isOpen && <div className="p-3">{children}</div>}
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <div className="block">
      <div className="pt-12 lg:pt-28">
        <AccordionItem title="Profile">
          <PortfolioProfiles />
        </AccordionItem>
        <AccordionItem title="Process Overview">
          <ProcessOverview />
        </AccordionItem>
        <AccordionItem title="Testimonials">
          <Testimonials />
        </AccordionItem>
      </div>
    </div>
  );
};

export default PortfolioSection;