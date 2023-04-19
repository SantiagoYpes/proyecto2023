import TableTeacher from "../components/TableTeacher";
import ComplexNavbar from "@/components/NavBar";
import { Fragment } from "react";
import { Typography } from "@material-tailwind/react";
import Footer from "../components/Footer";
export default function Guide() {
  return (
    <div className="min-h-screen items-center justify-center bg-gray-100 text-[#000000]">
      <ComplexNavbar />
      <br></br>
      <center>
        <Typography
          variant="h2"
          className="text-black-500 p-7 uppercase text-5xl  "
        >
          Gestión de Docentes
        </Typography>
      </center>
      <TableTeacher></TableTeacher>
      <Footer/>
    </div>
  );
}
