import React from 'react';
import '../../src/background.css';

const Background = () => {
    return (
        <div>
            {/* <div className="fixed inset-0 z-[-1] overflow-hidden">
                <div className="top-right absolute w-20 h-20 rounded-full animate-spin-slow"></div>
                <div className="bottom-right absolute w-20 h-20 rounded-full animate-pulse"></div>
                <div className="top-left absolute w-20 h-20 rounded-full animate-bounce"></div>
                <div className="bottom-left absolute w-20 h-20 rounded-full animate-ping"></div>
            </div> */}
            <div className='bg-colors-svg hidden sm:fixed sm:block'>
                <svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_704_29)">
                        <g className="bg_circle" filter="url(#filter0_f_704_29)">
                            <circle id="bgcircle" cx="330" cy="289" r="150" fill="url(#paint0_linear_704_29)"/>
                            <circle id="bgcircle" cx="330" cy="289" r="150" stroke="#18D8D2"/>
                        </g>
                        <g className="bg_circle" filter="url(#filter1_f_704_29)">
                            <rect x="970" y="600" width="403" height="403" fill="url(#paint1_linear_704_29)"/>
                            <rect x="970" y="600" width="403" height="403" stroke="#E29016"/>
                        </g>
                        <g filter="url(#filter2_f_704_29)">
                            <path d="M1190.22 362.743L1378.7 64.9816L1542.33 377.088L1190.22 362.743Z" fill="url(#paint2_linear_704_29)"/>
                        </g>
                        <g filter="url(#filter3_f_704_29)">
                            <path d="M395.598 537.854C396.197 536.011 398.803 536.011 399.402 537.854L468.11 749.314C468.377 750.138 469.145 750.696 470.012 750.696H692.354C694.291 750.696 695.097 753.175 693.53 754.314L513.651 885.004C512.95 885.513 512.657 886.416 512.924 887.24L581.632 1098.7C582.231 1100.54 580.122 1102.07 578.554 1100.94L398.676 970.246C397.975 969.737 397.025 969.737 396.324 970.246L216.446 1100.94C214.878 1102.07 212.769 1100.54 213.368 1098.7L282.076 887.24C282.343 886.416 282.05 885.513 281.349 885.004L101.47 754.314C99.903 753.175 100.709 750.696 102.646 750.696H324.988C325.855 750.696 326.623 750.138 326.89 749.314L395.598 537.854Z" fill="url(#paint3_linear_704_29)"/>
                            <path d="M395.598 537.854C396.197 536.011 398.803 536.011 399.402 537.854L468.11 749.314C468.377 750.138 469.145 750.696 470.012 750.696H692.354C694.291 750.696 695.097 753.175 693.53 754.314L513.651 885.004C512.95 885.513 512.657 886.416 512.924 887.24L581.632 1098.7C582.231 1100.54 580.122 1102.07 578.554 1100.94L398.676 970.246C397.975 969.737 397.025 969.737 396.324 970.246L216.446 1100.94C214.878 1102.07 212.769 1100.54 213.368 1098.7L282.076 887.24C282.343 886.416 282.05 885.513 281.349 885.004L101.47 754.314C99.903 753.175 100.709 750.696 102.646 750.696H324.988C325.855 750.696 326.623 750.138 326.89 749.314L395.598 537.854Z" stroke="#9B1DFF"/>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_f_704_29" x="-320" y="-361" width="1300" height="1300" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_704_29"/>
                    </filter>
                    <filter id="filter1_f_704_29" x="470" y="100" width="1403" height="1403" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_704_29"/>
                    </filter>
                    <filter id="filter2_f_704_29" x="690.223" y="-435.02" width="1352.11" height="1312.11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_704_29"/>
                    </filter>
                    <filter id="filter3_f_704_29" x="-399.358" y="36.4727" width="1593.72" height="1564.86" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_704_29"/>
                    </filter>
                    <linearGradient id="paint0_linear_704_29" x1="188.78" y1="139" x2="391.505" y2="207.255" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#33FF00"/>
                        <stop offset="1" stop-color="#16D5E1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_704_29" x1="1027.8" y1="506.821" x2="1428.49" y2="534.76" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF7A00"/>
                        <stop offset="1" stop-color="#FFD954"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_704_29" x1="1520.6" y1="1224.47" x2="1672.02" y2="277.445" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFBEDD"/>
                        <stop offset="1" stop-color="#FF23DC"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_704_29" x1="233.864" y1="532" x2="813.007" y2="696.183" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2400FF"/>
                        <stop offset="1" stop-color="#B923FF"/>
                    </linearGradient>
                    <clipPath id="clip0_704_29">
                        <rect width="1600" height="900" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>

            <div className='bg-colors-svg-m block fixed sm:hidden md:hidden lg:hidden'>
                <svg className="h-[100%] w-[100%]" viewBox="0 0 450 1000" height="1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_748_112)">
                    <g filter="url(#filter0_f_748_112)">
                    <circle cx="109.5" cy="158.5" r="109.5" fill="url(#paint0_linear_748_112)"/>
                    <circle cx="109.5" cy="158.5" r="109.5" stroke="#18D8D2"/>
                    </g>
                    <g filter="url(#filter1_f_748_112)">
                    <path d="M178.899 394.3L300.975 201.44L406.959 403.591L178.899 394.3Z" fill="url(#paint1_linear_748_112)"/>
                    </g>
                    <g filter="url(#filter2_f_748_112)">
                    <path d="M88.5979 562.854C89.1966 561.011 91.8034 561.011 92.4021 562.854L110.369 618.152C110.637 618.976 111.405 619.534 112.272 619.534L170.415 619.534C172.353 619.534 173.158 622.013 171.591 623.152L124.552 657.328C123.851 657.837 123.557 658.74 123.825 659.564L141.792 714.862C142.391 716.705 140.282 718.237 138.715 717.098L91.6756 682.922C90.9746 682.413 90.0254 682.413 89.3244 682.922L42.2852 717.098C40.7178 718.237 38.6088 716.705 39.2075 714.862L57.1749 659.564C57.4427 658.74 57.1494 657.837 56.4484 657.328L9.40918 623.152C7.84175 622.013 8.6473 619.534 10.5847 619.534L68.7284 619.534C69.5949 619.534 70.3628 618.976 70.6305 618.152L88.5979 562.854Z" fill="url(#paint2_linear_748_112)"/>
                    <path d="M88.5979 562.854C89.1966 561.011 91.8034 561.011 92.4021 562.854L110.369 618.152C110.637 618.976 111.405 619.534 112.272 619.534L170.415 619.534C172.353 619.534 173.158 622.013 171.591 623.152L124.552 657.328C123.851 657.837 123.557 658.74 123.825 659.564L141.792 714.862C142.391 716.705 140.282 718.237 138.715 717.098L91.6756 682.922C90.9746 682.413 90.0254 682.413 89.3244 682.922L42.2852 717.098C40.7178 718.237 38.6088 716.705 39.2075 714.862L57.1749 659.564C57.4427 658.74 57.1494 657.837 56.4484 657.328L9.40918 623.152C7.84175 622.013 8.6473 619.534 10.5847 619.534L68.7284 619.534C69.5949 619.534 70.3628 618.976 70.6305 618.152L88.5979 562.854Z" stroke="#9B1DFF"/>
                    </g>
                    <g filter="url(#filter3_f_748_112)">
                    <rect x="259" y="738" width="191" height="191" fill="url(#paint3_linear_748_112)"/>
                    <rect x="259" y="738" width="191" height="191" stroke="#E29016"/>
                    </g>
                    </g>
                    <defs>
                    <filter id="filter0_f_748_112" x="-350" y="-301" width="919" height="919" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_748_112"/>
                    </filter>
                    <filter id="filter1_f_748_112" x="-171.101" y="-148.559" width="928.06" height="902.148" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_748_112"/>
                    </filter>
                    <filter id="filter2_f_748_112" x="-341.419" y="211.473" width="863.838" height="856.016" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_748_112"/>
                    </filter>
                    <filter id="filter3_f_748_112" x="-91" y="388" width="891" height="891" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="175" result="effect1_foregroundBlur_748_112"/>
                    </filter>
                    <linearGradient id="paint0_linear_748_112" x1="6.40975" y1="49" x2="154.399" y2="98.8261" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#33FF00"/>
                    <stop offset="1" stop-color="#16D5E1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_748_112" x1="392.884" y1="952.442" x2="490.96" y2="339.052" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFBEDD"/>
                    <stop offset="1" stop-color="#FF23DC"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_748_112" x1="43.71" y1="557" x2="209.31" y2="603.946" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2400FF"/>
                    <stop offset="1" stop-color="#B923FF"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_748_112" x1="286.395" y1="693.838" x2="476.301" y2="707.08" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7A00"/>
                    <stop offset="1" stop-color="#FFD954"/>
                    </linearGradient>
                    <clipPath id="clip0_748_112">
                    <rect width="450" height="1000" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default Background;
