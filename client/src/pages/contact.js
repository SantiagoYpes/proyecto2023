import React from "react";
import { toast } from "react-hot-toast";
import ComplexNavbar from "@/components/NavBar";
import { Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";

import axios from "axios";
import { contextTeacher } from "../context/TeacherContext";
export default function TableContractUser() {
    const { contract, setContract } = useContext(contextTeacher);
    const [contracts, setContracts] = useState([]);
    console.log("id de contrato:" + contract);
    const url = "http://localhost:4000/contract/" + contract;
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url);
            console.log(result.data);
            setContracts(result.data);
            console.log(contracts);
        };
        fetchData();
    }, []);

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className="min-h-screen items-center justify-center bg-gray-100 text-[#000000]">
            <ComplexNavbar />
            <br></br> 
            
            <div class="flex">
                <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-300 hover:border-blue-500">
                    <img class="w-full" src="imagen1.jpg" alt="Imagen 1"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Tarjeta 1</div>
                            <p class="text-gray-700 text-base">
                                Contenido de la tarjeta 1.
                            </p>
                        </div>
                </div>

                <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-300 hover:border-blue-500">
                    <img class="w-full" src="imagen2.jpg" alt="Imagen 2"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Tarjeta 2</div>
                            <p class="text-gray-700 text-base">
                                Contenido de la tarjeta 2.
                            </p>
                        </div>
                </div>

                <div class="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-300 hover:border-blue-500">
                    <img class="w-full" src="imagen3.jpg" alt="Imagen 3"/>
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Tarjeta 3</div>
                            <p class="text-gray-700 text-base">
                                Contenido de la tarjeta 3.
                            </p>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
