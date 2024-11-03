// import React from 'react'

// const DevHero = () => {
//   return (
//     <div className='mt-[-90px]' >
//       <img  src='./images/keyboard.JPG'  className='h-96  w-[100%] '   ></img>
//     </div>
//   )
// }

// export default DevHero

// src/components/TextOverlay.js

"use client"; // Make it a client component

import React from 'react';

const DevHero = () => {
    return (
        <div className="relative mt-[-90px] w-full h-96 flex items-center justify-center overflow-hidden">
            <img 
                src="./images/keyboard.JPG" // Replace with your actual image URL
                alt="Background"
                className="absolute inset-0 object-cover   w-[100%] z-0"
            />
            <div className='flex flex-col' >
            <div className="sliding-text text-6xl font-bold relative z-10 text-white  text-center animate-slide-down">
            Development
            </div>
            <div className="relative z-10 text-white text-xl mt-4 text-center">Home /
            Digital Marketing</div>
            </div>
            
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        transform: translateY(-70px);
                        opacity: 0; /* Start invisible */
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1; /* Fade in */
                    }
                }

                .animate-slide-down {
                    animation: slideDown 1s forwards; /* Animation for sliding down */
                }
            `}</style>
        </div>
    );
};

export default DevHero;

