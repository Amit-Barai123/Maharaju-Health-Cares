import React from 'react';
import DevelopmentHeader from './DevHeading';


const projects = [
  {
    name: 'Edison-Electra',
    imageUrl: './images/electra.jpg',
    link: '#',
  },
  {
    name: 'W3 Naturals',
    imageUrl: './images/w3naturals.jpg',
    link: '#',
  },
  {
    name: 'Siddartha Edu',
    imageUrl: './images/siddartha.jpg',
    link: '#',
  },
  {
    name: 'Montridge',
    imageUrl: './images/montridge.png',
    link: '#',
  },
];

const ProjectsCard = () => {
  return (
    <>
    <DevelopmentHeader title={"Recent Projects"}  />
    <div className="container lg:w-[80%] mb-16  mx-auto p-4 mb">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border  overflow-hidden shadow-lg">
            <img src={project.imageUrl} alt={project.name} className="w-full h-20 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <a href={project.link} className="text-teal-600 flex items-center mt-2">
                <a className="mr-1" /> View Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProjectsCard;
