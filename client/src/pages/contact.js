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
            <div class="flex space-x-4">
                <div class="bg-white rounded-lg text-center shadow-lg p-6">
                    <h2 class="text-xl font-semibold">WhatsApp</h2>
                    <p class="mb-5 mt-3">¡Hablanos a nuestra línea única de atención de WhatsApp para brindarte el mejor apoyo!</p>
                    <a href="https://api.whatsapp.com/send/?phone=3245301146" class="bg-[#EE2737] hover:bg-[#1F6768] text-white font-bold py-2 px-4 rounded">
                        Ir al chat
                    </a>
                </div>
                <div class="bg-white rounded-lg text-center shadow-lg p-6">
                    <h2 class="text-xl font-semibold">Correo electrónico</h2>
                    <p class="mb-5 mt-3">¡Hablanos a nuestra línea única de atención de correo electrónico para brindarte el mejor apoyo!</p>
                    <a href="mailto:smontoya660@soyudemedellin.edu.co" class="bg-[#EE2737] hover:bg-[#1F6768] text-white font-bold py-2 px-4 rounded">
                        Ir al correo
                    </a>
                </div>
                <div class="bg-white rounded-lg text-center shadow-lg p-6">
                    <h2 class="text-xl font-semibold">Tarjeta 3</h2>
                    <p class="mb-5 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis turpis at elementum ultrices.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
