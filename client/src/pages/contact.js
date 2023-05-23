import React from "react";
import { toast } from "react-hot-toast";
import ComplexNavbar from "@/components/NavBar";
import { Typography } from "@material-tailwind/react"; 
import CardComponent from "../components/cardcomponent";
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
            <CardComponent></CardComponent>
            <Footer />
        </div>
    );
}
