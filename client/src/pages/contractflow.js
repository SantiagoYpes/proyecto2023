import { useContext } from "react";
import { useEffect } from "react"; 
import tablecontract from "../components/tablecontract";
import Footer from "../components/Footer"; 
import axios from "axios";
export default function Profile() {
  const { teacher, setTeacher } = useContext(contextTeacher);
  console.log(teacher);

  const url = "http://localhost:4000/teacher/" + teacher;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setTeacher(result.data);
      console.log(result);
    };

    fetchData();
  }, []);
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
    <tablecontract></tablecontract>
    <Footer/>
  </div>
  );
}
