"use client"
import { useState } from 'react';

const tabs = [
  { id: 1, image:'./images/tab-1.JPG', label: 'Business Analysis', icon: 'bi-diagram-3', content: 'Supporting our clients with suitable IT Services requires a blend of different skills and expertise. With ilander Technologies Private Limited, you can access our entire team of experts at any time.' },
  { id: 2, image:'./images/tab-2.JPG', label: 'Business Consulting', icon: 'bi-people', content: 'Our consulting services provide solutions to enhance your business growth, helping you adapt to changes and improve productivity.' },
  { id: 3, image:'./images/tab-3.JPG', label: 'Cost-Effective', icon: 'bi-currency-dollar', content: 'We offer cost-effective solutions tailored to meet your specific requirements, ensuring you get value for your investment.' },
  { id: 4, image:'./images/tab-4.JPG', label: 'Experienced & Skilled', icon: 'bi-globe', content: 'Our team comprises experienced and skilled professionals dedicated to delivering top-notch services and solutions.' },
  { id: 5, image:'./images/tab-5.JPG', label: 'Quality Work', icon: 'bi-pen', content: 'Quality is our priority. We ensure that every project is completed with the highest standards of excellence and attention to detail.' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
    <div className='mt-14' >
        <h2 className='text-[#032963] text-3xl font-bold text-center'  >
        Why Choose us ?
        </h2>
        <p className='text-slate-600 tracking-wider text-center mx-auto mt-3  mb-8 lg:w-[50%] ' >We are a Web application Development company with the vision of creating user friendly web applications to the small and media scale enterprises.</p>
    </div>
    <div className="flex flex-col lg:flex-row gap-4 p-4 lg:w-[80%] lg:mx-auto lg:p-8">
      {/* Left Side Tabs */}
      <div className="flex flex-col space-y-2 lg:w-2/6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center px-4 border py-5 rounded-lg text-2xl  text-left transition ${
              activeTab.id === tab.id ? 'bg-[#032963] text-white' : 'bg-white text-gray-700'
            }`}
          >
            <i className={`${tab.icon} mr-2 text-lg`}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Right Side Content */}
      <div className="flex-1">
        <img src={activeTab.image} ></img>
        <h2 className="text-3xl  mt-3 mb-4">{activeTab.label}</h2>
        <p className="text-gray-600 tracking-wide ">{activeTab.content}</p>
      </div>
    </div></>
  );
}
