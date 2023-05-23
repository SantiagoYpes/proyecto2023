import { button } from "@material-tailwind/react";
import buttonText from "@material-tailwind/react/theme/components/button/buttonText";
import React from "react";


const Card = ({ title, description, image }) => {
    return (
        <div className="w-1/3 p-4 flex justify-center">
            <div className="bg-white rounded-lg shadow-lg border hover:border-red-500">
                <div className="p-4 text-center title-center">
                    <div className="flex items-center justify-center mb-2">
                        <span className="text-red-500 mr-2 text-2xl"></span>
                        <h3 className="text-lg font-semibold">{title}</h3>
                    </div>
                    <p className="text-gray-700">{description}</p>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                    >
                        {buttonText}
                    </a>
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
                description="Escanea el código QR y hablanos para asesorarte"  
                buttonText="Hola"
                buttonUrl="https://www.instagram.com"
            />
            <Card
                title="Correo"
                description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Card
                title="Atención al Usuario"
                description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            />
        </div>
    );
};

export default CardComponent;