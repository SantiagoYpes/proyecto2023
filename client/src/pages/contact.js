import styles from "../styles/Contact.module.css";
export default function Contact() {
  return (
    <div className="min-h-screen  justify-center bg-gray-100">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nuestros Servicios</h1>
        </div>
        <div className={styles.cards}>
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-2xl dark:bg-white-800 dark:border-gray-700 mt-10 text-center">
            <svg
              className={styles.svg}
              fill="none"
              stroke="red"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              ></path>
            </svg>
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black text-center">
              Titulo del card
            </h5>
            <p class="mb-3 font-normal text-black">
              short description of the card aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Acerca de la U
            </button>
          </div>
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
