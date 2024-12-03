import React from "react";

const Services = () => {
  const service = [
    {
      id: 1,
      title: "WEB DESIGN",
      description: "Creating visually appealing and user friendly web design",
    },
    {
      id: 2,
      title: "FRONTEND DEVELOPMENT",
      description: "Building responsive and  interactive user interface",
    },
    {
      id: 3,
      title: "BACKEND DEVELOPMENT",
      description: "Devoloping robust server side logic and databases",
    },
  ];

  return (
    <div className="bg-black text-white py-20" id="Services">
      <div className=" container mx-auto px-8 md:px-6 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.map((Services) => (
            <div
              key={Services.id}
              className="bg-gray-800 px-6 pb-6  rounded-lg hover:shadow-lg tansform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-right text-2xl font-bold bg-gradient-to-r from-pink-500 to to-yellow-500 text-transparent bg-clip-text">
                {Services.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-pink-500 to to-yellow-500">
                {Services.title}
              </h3>
              <p className="mt-2 text-gray-300">{Services.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
