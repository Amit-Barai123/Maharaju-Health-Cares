// components/TestimonialCard.js

import 'bootstrap-icons/font/bootstrap-icons.css';

const TestimonialCard = () => {
  return (
   <>
   <h2 className='text-[#032963] text-4xl text-center font-bold mt-6 mb-5'  >Our Management</h2>
   <div className='flex flex-col  mx-auto gap-6 lg:w-[80%]  mb-10 lg:mb-20 md:flex-row '  >
   <div className="flex  md:flex-row items-center flex-1  bg-white shadow-2xl rounded-lg p-4  md:p-8 transform transition-all duration-300 hover:-translate-y-2 max-w-2xl mx-auto">
      {/* Left Section: Profile Image */}
      <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
        <img
          src="/images/team-1.jpg" // Replace with your image path
          alt="Profile"
          className="rounded-full w-32 h-w-32 object-cover"
        />
      </div>
      
      {/* Right Section: Content */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold text-[#032963]">Siva Sankar Neela</h2>
        <p className="text-gray-500">Managing Director</p>
        <p className="text-gray-500 font-light mt-5 mb-4">
          iLander Training & Consultancy  <br></br> Services LLP
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="text-gray-500    transition-colors duration-300"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="#"
            className="text-gray-500     transition-colors duration-300"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-500   transition-colors duration-300"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-500   transition-colors duration-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    <div className="flex  md:flex-row items-center flex-1  bg-white shadow-2xl rounded-lg p-4  md:p-8 transform transition-all duration-300 hover:-translate-y-2 max-w-2xl mx-auto">
      {/* Left Section: Profile Image */}
      <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
        <img
          src="/images/team-1.jpg" // Replace with your image path
          alt="Profile"
          className="rounded-full w-32 h-w-32 object-cover"
        />
      </div>
      
      {/* Right Section: Content */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-bold text-[#032963]">Siva Sankar Neela</h2>
        <p className="text-gray-500">Managing Director</p>
        <p className="text-gray-500 font-light mt-5 mb-4">
          iLander Training & Consultancy  <br></br> Services LLP
        </p>
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#"
            className="text-gray-500    transition-colors duration-300"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="#"
            className="text-gray-500     transition-colors duration-300"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="#"
            className="text-gray-500   transition-colors duration-300"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="#"
            className="text-gray-500   transition-colors duration-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    
   </div>
   </>
  );
};

export default TestimonialCard;
