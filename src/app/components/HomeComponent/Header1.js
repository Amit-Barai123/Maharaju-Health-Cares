import React from 'react';

const Header1 = () => {
  return (
    <div id="header1" className="bg-[#181D38] text-white text-sm pb-6 hidden-on-scroll hidden lg:block">
      <div className="container w-[80%] mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex space-x-4">
          <span className="bi bi-geo-alt-fill mr-2 leading-4"> &nbsp;51/42, Rayachoty, AP-516269</span>
          <span className="bi bi-telephone-fill mr-2 leading-4"> &nbsp; +91 9000299706</span>
          <span className="bi bi-envelope-open-fill mr-2 leading-4"> &nbsp;ilandertech@gmail.com</span>
        </div>
        <div className="flex space-x-2">
          <a
            href="#"
            className="text-white bi bi-twitter text-sm rounded-full p-2 border border-white flex items-center justify-center hover:bg-white hover:text-[#181D38] transition duration-300"
          ></a>
          <a
            href="#"
            className="text-white bi bi-facebook text-sm rounded-full p-2 border border-white flex items-center justify-center hover:bg-white hover:text-[#181D38] transition duration-300"
          ></a>
          <a
            href="#"
            className="text-white bi bi-linkedin text-sm rounded-full p-2 border border-white flex items-center justify-center hover:bg-white hover:text-[#181D38] transition duration-300"
          ></a>
          <a
            href="#"
            className="text-white bi bi-instagram text-sm rounded-full p-2 border border-white flex items-center justify-center hover:bg-white hover:text-[#181D38] transition duration-300"
          ></a>
          <a
            href="#"
            className="text-white bi bi-youtube text-sm rounded-full p-2 border border-white flex items-center justify-center hover:bg-white hover:text-[#181D38] transition duration-300"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Header1;
