export default function MarketDetails() {
    return (
      <div className="flex flex-col mt-10 md:flex-row items-center max-w-5xl mx-auto">
        {/* Left Side - Image */}
        <div className="md:w-1/2 w-full h-full flex items-center justify-center slide-left">
          <img
            src="/images/seo.jpg" // Replace with your image path
            alt="Team Meeting"
            className="object-cover w-[80%] h-auto"
          />
        </div>
  
        {/* Right Side - Content */}
        <div className="md:w-1/2 w-full p-6 slide-right">
          <h2 className="text-3xl font-bold leading-10 text-black">
            Top <span className="text-[#33CCC5]">Marketing </span>
            agency & consult your website<span className="text-[#0A8FC3]"> with us</span>
          </h2>
          <p className="mt-4 text-gray-500">
            iLander Technologies Pvt Ltd is one of the best website development
            companies. In our organization, we provide services like dynamic
            website development, e-commerce website development, and payment
            gateway integration.
          </p>
  
          <div className="mt-8 flex justify-around text-center text-[#0A8FC3]">
            <div>
              <h3 className="text-4xl text-start font-bold">750+</h3>
              <p className="text-xl text-gray-600">projects finished</p>
            </div>
            <div>
              <h3 className="text-4xl text-start font-bold">340+</h3>
              <p className="text-xl text-gray-600">happy clients</p>
            </div>
            <div>
              <h3 className="text-4xl text-start font-bold">8+</h3>
              <p className="text-xl text-gray-600">Experience</p>
            </div>
          </div>
  
          <div className="mt-6">
            <p className="tracking-wider text-slate-500">
              <span className="text-[#0A8FC3]">At iLander Technologies </span>We will help you build
              beautiful, accessible, fast, and secure websites that work cross-browser, and for all of
              your users. Our services include web design, development, e-commerce, domain and web
              hosting, website redesign, and maintenance. We will build your website in 1 to 2 weeks
              to build and deploy. Apart from design and development, this period includes testing and
              quality assurance. Based on client feedback and updates, this timeframe may increase.
            </p>
          </div>
        </div>
      </div>
    );
  }
  