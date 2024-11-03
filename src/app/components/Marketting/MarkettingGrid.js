// components/ServicesGrid.js
import 'bootstrap-icons/font/bootstrap-icons.css';

const services = [
  {
    icon: "./images/icon-5.png",
    title: "Digital Marketing",
    description: "iLander is a Digital Marketing agency specialized in advice and execution of online marketing activities.."
  },
  {
    icon: "./images/icon-6.png",
    title: "Internet Marketing",
    description: "Internet marketing involves the use of online resources to promote a company and its products or services ."
  },
  {
    icon: "./images/icon-7.png",
    title: "Content Marketing",
    description: "Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating."
  },
  {
    icon: "./images/icon-9.png",
    title: "B2B Marketing",
    description: "As the name suggests, business-to-business marketing refers to the marketing of products or services to other businesses and organizations."
  },
  {
    icon: "./images/icon-8.png",
  
    title: "Social Media Marketing",
    description: "A website redesign is the process of changing and updating the content, structure, format, and navigation of your website."
  },
  {
    icon: "./images/icon-10.png",
    title: "E-mail Marketing",
    description: "The act of sending a commercial message, typically to a group of people, using email. In its broadest sense. every email sent to a potential."
  }
];

export default function MarkettingGrid() {
  return (
    <div>
        <div>
            <h2 className='text-[#0A8FC3] text-center mt-10 text-2xl' >Our Services</h2>
            <p className='text-5xl text-center mx-auto  mt-2 mb-14 font-bold' >Digital Marketing Services that We Offer</p>
        </div>
        <div className="container mx-auto lg:w-[80%] p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-[#032963] p-6 border  transition-all duration-300 transform hover:-translate-y-2 "
          >
            <img className='mb-4' src={`${service.icon}`}/>
            <h3 className="text-xl text-slate-800 font-semibold mb-2">{service.title}</h3>
            <p className="tracking-wider text-gray-600 ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
