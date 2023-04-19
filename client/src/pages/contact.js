import styles from "../styles/Contact.module.css";
import ServiceCardComponent from "@/components/ServiceCardComponent";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await reRef.current.executeAsync();
    reRef.current.reset();
  };

  const reRef = useRef();

  const adminInfoCard = {
    title: "Administra tu informacion",
    shortDesc: "¡Gestiona y edita tu información personal y profesional!",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  };

  const courseInfoCard = {
    title: "Gestiona y observa tus cursos",
    shortDesc: "¡Observa los cursos para los cuales has sido contratado!",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  };

  const contactInfoCard = {
    title: "Contacta con un asesor",
    shortDesc:
      "¡Si tienes dudas, peticiones o reclamos contacta con un asesor!",
    icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z",
  };

  return (
    <div className="min-h-screen justify-center bg-gray-100">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nuestros Servicios</h1>
        </div>
        <div className={styles.cards}>
          <ServiceCardComponent
            title={adminInfoCard.title}
            shortDesc={adminInfoCard.shortDesc}
            icon={adminInfoCard.icon}
          ></ServiceCardComponent>
          <ServiceCardComponent
            title={courseInfoCard.title}
            shortDesc={courseInfoCard.shortDesc}
            icon={courseInfoCard.icon}
          ></ServiceCardComponent>
          <ServiceCardComponent
            title={contactInfoCard.title}
            shortDesc={contactInfoCard.shortDesc}
            icon={contactInfoCard.icon}
          ></ServiceCardComponent>
        </div>
      </div>
      <footer className={styles.footer} onSubmit={handleSubmit}>
        <div className={styles.footerContainer}>
          <h2 className="">Contáctantos</h2>
          <form className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <input
                className="mb-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="NOMBRE"
                value={formValues.name}
                onChange={(e) => {
                  const { value } = e.target
                  setFormValues({...formValues, name:value})
                }}
              ></input>
              <input
                placeholder="E-MAIL"
                className="mb-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formValues.email}
                onChange={(e) => {
                  const { value } = e.target
                  setFormValues({...formValues, email:value})
                }}
              ></input>
            </div>
            <input
              placeholder="MENSAJE"
              className="mb-1 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={formValues.message}
              onChange={(e) => {
                const { value } = e.target
                setFormValues({...formValues, message:value})
              }}
            ></input>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              ENVIAR
            </button>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
              ref={reRef}
            />
          </form>
        </div>
      </footer>
    </div>
  );
}
