import styles from "../styles/Contact.module.css";
import ServiceCardComponent from "@/components/ServiceCardComponent";

export default function Contact() {
  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nuestros Servicios</h1>
        </div>
        <div className={styles.cards}>
          <ServiceCardComponent></ServiceCardComponent>
          <ServiceCardComponent></ServiceCardComponent>
          <ServiceCardComponent></ServiceCardComponent>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <h2>Contáctantos</h2>
          <form>
            <input placeholder="NOMBRE"></input>
            <input placeholder="E-MAIL"></input>
            <input placeholder="MENSAJE"></input>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              ENVIAR
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
