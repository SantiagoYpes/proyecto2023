import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.bgImage}></div>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>ADMIN-360</h1>
        <h3 className={styles.subtitle}>Espacio unico para profes</h3>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Acerca de la U
        </button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <h2 className={styles.subtitle}>¡Sitio único y exclusivo para docentes!</h2>
          <p className={styles.text}>
            Desde aqui podras observar información acerca de los cursos para los
            cuales has sido contratado. Además tendrás la posibilidad de
            gestionar tu contrato y demas informacion laboral y profesional
          </p>
        </div>
      </footer>
    </div>
  );
}
