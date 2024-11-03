// components/ServicesGrid.js
import DevelopmentHeader from '../Development/DevHeading';
const services = [
  {
    icon: "bi-reddit",
    title: "Logo Design",
    description: "Logo design is all about creating the perfect visual brand mark for a company.."
  },
  {
    icon: "bi-postcard",
    title: "Brochure Design",
    description: "A brochure is an informative paper document folded into a template, pamphlet, or leaflet."
  },
  {
    icon: "bi-postcard-heart",
    title: "Flyer Design",
    description: " A flyer is a type of promotional material that's printed on a sheet of paper — i.e. a print ad"
  },
  {
    icon: "bi-toggle-on",
    title: "Leaflet Design",
    description: "A Leaflet is a small sheet of printed paper that puts across a short message clearly and concisely"
  },
  {
    icon: "bi-newspaper",
    title: "Pamphlets Design",
    description: "Pamphlets are typically larger than leaflets and smaller than brochures. They include some images but mostly informational"
  },
  {
    icon: "bi-postage-heart-fill",
    title: "Poster Design",
    description: "Poster design is a type of graphic design. Usually have more flexibility and freedom beyond traditional marketing methods."
  }
  ,
  {
    icon: "bi-trello",
    title: "Banner Design",
    description: "A banner design is a great way to market a company's services or products. We can create ads and can drive a good traffic to your website"
  }
  ,
  {
    icon: "bi-filetype-psd",
    title: "PSD Design",
    description: "PSD stands for Photoshop Document, which is an image format that supports layers of graphics in a single file"
  }
  ,
  {
    icon: "bi-twitter",
    title: "Social media design",
    description: "Social media design is the practice of creating visuals for social media platforms such as Instagram, Facebook, Twitter."
  },
  
];

export default function GraphicGrid() {
  return (
    <>
    <DevelopmentHeader title={"Graphic Design"}/>
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
