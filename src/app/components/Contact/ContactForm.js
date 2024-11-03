import DevelopmentHeader from "../Development/DevHeading";
export default function ContactForm() {
  return (
    <>
      <DevelopmentHeader title={"Contact Us"} />
      <div className="flex flex-col lg:flex-row md:w-[80%] mx-auto justify-center p-6">
        {/* Left Side - Contact Information */}
        <div className="w-full lg:w-3/6 p-4 space-y-6">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-geo-alt-fill text-white text-2xl"></i>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-blue-950">Address :</h3>
              <p className="text-slate-600 tracking-wider" >51/42, Jagadamba Center, Rayachoty, AP-516269</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-telephone-fill text-white text-2xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-xl text-blue-950">Mobile :</h3>
              <p className="text-slate-600 tracking-wider">+91 9000299706</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-950 h-14 w-14 flex justify-center items-center">
              <i className="bi bi-envelope-fill text-white text-2xl"></i>
            </div>

            <div>
              <h3 className="font-semibold text-xl  text-blue-950">Email :</h3>
              <p className="text-slate-600 tracking-wider">info@ilandertcs.com</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-3/6 p-4">
          <form className="space-y-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:space-x-4 ">
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full px-3 py-4 border border-[#DC3545] rounded focus:outline-none focus:ring-2 focus:shadowfocus:border-transparent"
                />
                <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                  Your Name
                </label>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full px-3  py-4 border border-[#DC3545] rounded focus:outline-none focus:ring-2 focus:shadowfocus:border-transparent"
                />
                <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                  Your Email
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full px-3 py-4 border border-[#DC3545] rounded focus:outline-none focus:ring-2 focus:shadowfocus:border-transparent"
              />
              <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                Subject
              </label>
            </div>
            <div className="relative">
              <textarea
                rows="4"
                placeholder=" "
                className="peer w-full px-3 py-2 border border-[#DC3545] rounded focus:outline-none focus:ring-2 focus:shadowfocus:border-transparent"
              ></textarea>
              <label className="absolute left-3 -top-2 text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-900 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
