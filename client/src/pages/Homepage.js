import { useTeachers } from "../context/TeacherContext";
import { Link } from "react-router-dom";
import "../style/home.css";
function Homepage() {
  const { teachers, setTeachers } = useTeachers();
  return (
    <div>
      Homepage
      <Link to="/newTeacher">Go to New</Link>
      <button className="bg-red-100" onClick={() => setTeachers([1, 2, 3])}>
        add
      </button>
      <div id="contacto">
        <div class="contenedor" data-aos="fade-up">
            <h2 class="titulo">Contáctanos</h2> 
             
            <textarea class="input" id="prueba2" name="" id="" cols="30" rows="10" placeholder="MENSAJE"></textarea> 
        </div>
    </div>
    </div>
  );
}

export default Homepage;
