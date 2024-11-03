// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#0a0f2c] text-white p-10 pt-20">
      <div className="container md:w-full lg:w-[85%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Quick Links */}
        <div>
          <h5 className="font-bold text-lg mb-1 ">Quick Link</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-2">
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Web Development</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Digital Marketing</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Graphic Designing</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">Internship</a>
            </li>
            <li className="flex items-center">
              <i className="bi bi-chevron-right mr-2"></i>
              <a href="#" className="hover:tracking-widest">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="font-bold text-lg mb-1">Contact</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <ul className="space-y-4">
            <li className="flex items-center">
              <i className="bi bi-geo-alt mr-2"></i>
              51/42, Jagadamba Center, Rayachoty, AP-516269
            </li>
            <li className="flex items-center">
              <i className="bi bi-telephone mr-2"></i>
              +91 9000299706
            </li>
            <li className="flex items-center">
              <i className="bi bi-envelope mr-2"></i>
              info@ilandertech.com
            </li>
          </ul>
        </div>

        {/* Gallery */}
        <div>
       
          <h5 className="font-bold text-lg mb-1">Gallery</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <div className="grid grid-cols-3 gap-2">
            <img src="/images/footer-img1.png" alt="Gallery 1" className="w-16 h-16 border-white border-2" />
            <img src="/images/footer-img2.png" alt="Gallery 2" className="w-16 h-16 border-white border-2" />
            <img src="/images/footer-img-3.png" alt="Gallery 3" className="w-16 h-16 border-white border-2" />
            <img src="/images/footer-img4.jpg" alt="Gallery 4" className="w-16 h-16 border-white border-2" />
            <img src="/images/footer-img5.jpg" alt="Gallery 5" className="w-16 h-16 border-white border-2" />
            <img src="/images/footer-img6.jpg" alt="Gallery 6" className="w-16 h-16 border-white border-2" />
          </div>
        </div>

        {/* Newsletter */}
        <div>
      
          <h5 className="font-bold text-lg mb-1">Newsletter</h5>
          <hr className="w-[60px] font-extrabold border-t-2 mb-5" ></hr>
          <p className="mb-4">iLander Technologies Pvt Ltd.</p>
          <form className="flex items-center border-b  bg-white relative border-gray-500 py-3">
            <input
              type="email"
              placeholder="Your email"
              className=" focus:outline-none text-black placeholder-gray-400 px-2 flex-grow"
            />
            <button
              type="submit"
              className="bg-[#0a0f3e] text-white absolute right-2 px-4 py-2 ml-2 "
            >
              SignUp
            </button>
          </form>
        </div>
        
      </div>
      <hr className="mt-12 lg:w-[86%] text-gray-400 border-slate-500 mx-auto" ></hr>
      <div className="flex flex-col lg:flex-row lg:w-[86%] justify-between mx-auto mt-8 px-4">
    <div className="text-center lg:text-left">
        <p>© 2015 iLander Technologies Private Limited, All Right Reserved.</p>
    </div>
    <div className="mt-4 lg:mt-0 lg:mr-72 text-center lg:text-right">
        <span>Home &nbsp;</span>
        <span>FQAs</span>
    </div>
</div>

    </footer>
  );
}
