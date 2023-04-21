import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.body}> 
      <div className={styles.bgImage}></div>  
      <div class="absolute top-0 right-0 mt-4 mr-4">
        <a href="/login" class="bg-[#1F6768] hover:bg-[#EE2737] text-white font-bold py-2 px-4 rounded mr-3">
          Iniciar sesión
        </a>
        <a href = "/signup" class=" bg-[#EE2737] hover:bg-[#1F6768] text-white font-bold py-2 px-4 rounded">
          Registrarse
        </a>
      </div>
      <div className={styles.mainContainer}>    
        <h1 className={styles.title}>ADMIN-360</h1>
        <h3 className={styles.subtitle}>Espacio unico para profes</h3>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold mb-5 py-2 px-4 rounded">
          Acerca de la U
        </button>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <h2 className={styles.subtitle}>¡Sitio único y exclusivo para docentes!</h2>
          <p className={styles.text}>
            Desde aqui podras observar información acerca de tu contrato 
            y demas informacion laboral y profesional.
          </p>
        </div>
      </footer>
    </div>
  );
}
