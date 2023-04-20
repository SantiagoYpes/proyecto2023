import styles from "../styles/Homeadmin.module.css";
import ServiceCardComponent from "../components/ServiceCardComponent";
export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.bgImage}></div>
      <div className={styles.mainContainer}>
        <div>
          <div class="grid grid-cols-3 gap-4">
            <ServiceCardComponent
              title="Consulta la información del Docente"
              shortDesc="¡Consulta la información del Docente!"
              rout="/guide"
            />
            <ServiceCardComponent
              title="Registra un docente"
              shortDesc="¡Desde aquí el administrador podrá registrar docentes!"
              rout="/signup"
            />
            <ServiceCardComponent
              title="Visualiza los cursos"
              shortDesc="¡Añade docentes a nuevos  segun el numero de modulos!"
              rout="/guide"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
