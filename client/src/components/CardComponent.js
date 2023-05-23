import React from "react";
import { useState } from 'react';  


const Card= ({ title, description, image }) => {
  return (
    <div className="w-1/3 p-4 flex justify-center">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
        <div className="p-4">
          <div className="flex items-center mb-2">
            <span className="text-red-500 mr-2 text-2xl"></span>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}; 

const CardComponent = () => {
  return ( 
    <div className="flex justify-center">
    <Card
      title="WhatsApp"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      icon={<i className="fab fa-whatsapp"></i>}
    />
    <Card
      title="Correo"
      description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      icon={<i className="fas fa-envelope"></i>}
    />
    <Card
      title="Atención al Usuario"
      description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      icon={<i className="fas fa-users"></i>}
    />
  </div>
  );
};

export default CardComponent;