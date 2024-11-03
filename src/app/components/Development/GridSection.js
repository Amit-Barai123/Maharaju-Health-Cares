// components/ServicesGrid.js
import 'bootstrap-icons/font/bootstrap-icons.css';
import DevelopmentHeader from './DevHeading';

const services = [
  {
    icon: "bi-display",
    title: "Website Design",
    description: "Our Professional Web Designers create an attractive, professional, unique website designs."
  },
  {
    icon: "bi-file-earmark-code",
    title: "Web Development",
    description: "We focus on creating dynamic websites and highlight the benefit of this type if websites to our clients to better understand them."
  },
  {
    icon: "bi-cart-fill",
    title: "E-commerce",
    description: "Ecommerce website design involves creating and launching a virtual store to sell products."
  },
  {
    icon: "bi-hdd",
    title: "Domain and Hosting",
    description: "We provide domain and web hosting service where a domain name is just your website's address, while web hosting stores all your website data and files."
  },
  {
    icon: "bi-display",
    title: "Website Redesign",
    description: "A website redesign is the process of changing and updating the content, structure, format, and navigation of your website."
  },
  {
    icon: "bi-tools",
    title: "Website Maintenance",
    description: "Website maintenance is the practice of monitoring your website’s overall health and performance."
  }
];

export default function ServicesGrid() {
  return (
    <>
    <DevelopmentHeader title={"Development"}/>
    <div className="container mx-auto lg:w-[80%] p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-start text-[#032963] text-left p-6 border border-gray-300 transition-colors duration-300 hover:bg-[#032963] hover:text-white"
        >
          <i className={`${service.icon} text-4xl mb-4`}></i>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="tracking-wider hover:text-white">{service.description}</p>
        </div>
      ))}
    </div>
  </div></>
  );
}
