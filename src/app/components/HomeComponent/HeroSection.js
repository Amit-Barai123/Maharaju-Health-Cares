// // components/HeroSection.js
// "use client"
// import React, { useEffect, useState } from 'react';

// const HeroSection = () => {
//   const images = [
//     '/images/image1.jpeg', // Replace with actual paths
//     '/images/image2.2.jpeg',
//     '/images/image3.jpeg',
//   ];
  
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative w-full h-[70vh] overflow-hidden">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentImage ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{ backgroundImage: `url(${image})` }}
//         ></div>
//       ))}
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">WEB DESIGNING & DEVELOPMENT</h1>
//         <p className="text-lg md:text-xl text-gray-200 mt-2">Our solutions for your business growth.</p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
