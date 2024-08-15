import React from 'react';
import '../index.css';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Qualities from '../components/Qualities';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>TechFloww IT Services</title>
                </Helmet>
            </div>
            <Hero />
            <About />
            <Services />
            <Qualities />
            <Portfolio />
            <Testimonials />
            <Footer />
            {/* <div className='bg-colors-svg'>
                <div className='violet-svg-top'>
                <svg width="1381" height="1094" viewBox="0 0 1381 1094" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M548 206C715.489 200.828 822.339 67.9501 855.466 1.08578C855.805 0.40112 856.485 0 857.249 0H1379C1380.1 0 1381 0.895407 1381 1.99998V890.5V1055.58C1381 1056.15 1380.75 1056.72 1380.32 1057.1C1298.06 1128.25 1128.81 1083.32 1060 1017C997.344 956.614 1056.5 691.5 907 681.5C757.5 671.5 632 870.5 390 872.5C148 874.5 0 646 0 508.5C-6.91414e-06 376.5 337.5 212.5 548 206Z" fill="url(#paint0_linear_676_372)"/>
                    <path d="M548 206C715.489 200.828 822.339 67.9501 855.466 1.08578C855.805 0.40112 856.485 0 857.249 0H1379C1380.1 0 1381 0.895407 1381 1.99998V890.5V1055.58C1381 1056.15 1380.75 1056.72 1380.32 1057.1C1298.06 1128.25 1128.81 1083.32 1060 1017C997.344 956.614 1056.5 691.5 907 681.5C757.5 671.5 632 870.5 390 872.5C148 874.5 0 646 0 508.5C-6.91414e-06 376.5 337.5 212.5 548 206Z" fill="black" fill-opacity="0.5"/>
                    <path d="M548 206C715.489 200.828 822.339 67.9501 855.466 1.08578C855.805 0.40112 856.485 0 857.249 0H1379C1380.1 0 1381 0.895407 1381 1.99998V890.5V1055.58C1381 1056.15 1380.75 1056.72 1380.32 1057.1C1298.06 1128.25 1128.81 1083.32 1060 1017C997.344 956.614 1056.5 691.5 907 681.5C757.5 671.5 632 870.5 390 872.5C148 874.5 0 646 0 508.5C-6.91414e-06 376.5 337.5 212.5 548 206Z" stroke="#9B1DFF"/>
                    <defs>
                    <linearGradient id="paint0_linear_676_372" x1="333.5" y1="-0.000205521" x2="1543.38" y2="433.28" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2400FF"/>
                    <stop offset="1" stop-color="#B923FF"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
                <div className='green-svg-middle'>
                <svg width="980" height="879" viewBox="0 0 980 879" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M281.5 1.99917C170.7 -14.8008 57.3333 122.333 14.5 192.999C-46.5 383.999 103 371.5 159.5 451.5C216 531.5 136.5 648.5 210 755.5C283.5 862.5 426 915.5 676 850C926 784.5 1062.5 422 923.5 321C784.5 220 690.5 346.5 550 308.5C409.5 270.5 420 22.9992 281.5 1.99917Z" fill="url(#paint0_linear_676_510)"/>
                    <defs>
                    <linearGradient id="paint0_linear_676_510" x1="28.7849" y1="0.586011" x2="674.325" y2="242.88" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33FF00"/>
                    <stop offset="1" stop-color="#16D5E1"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
                <div className='yellow-svg-middle'>
                <svg width="976" height="1320" viewBox="0 0 976 1320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M660.209 1320C774.599 1320 882.194 1290.92 976 1239.74V80.2551C882.194 29.0826 774.599 0 660.209 0C295.586 0 0 295.492 0 660C0 1024.51 295.586 1320 660.209 1320Z" fill="url(#paint0_linear_679_65)"/>
                    <defs>
                    <linearGradient id="paint0_linear_679_65" x1="139.99" y1="-305.203" x2="1112.53" y2="-255.062" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7A00"/>
                    <stop offset="1" stop-color="#FFD954"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
                <div className='pink-svg-bottom'>
                <svg width="1045" height="1103" viewBox="0 0 1045 1103" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1103V127.58C12.3484 86.5069 67.1984 3.49854 187.811 0.0518263C338.576 -4.25657 349.776 261.14 467.804 391.254C585.832 521.367 956.284 442.954 1031.24 664.406C1091.2 841.567 940.777 1030.62 858.071 1103H0Z" fill="url(#paint0_linear_679_93)"/>
                    <defs>
                    <linearGradient id="paint0_linear_679_93" x1="-1831.43" y1="-291.471" x2="217.086" y2="1157.86" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFBEDD"/>
                    <stop offset="1" stop-color="#FF23DC"/>
                    </linearGradient>
                    </defs>
                </svg>
                </div>
            </div> */}
        </>
    )
}

export default Home;