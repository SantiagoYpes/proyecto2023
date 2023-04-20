import React from "react";
import styles from "../styles/ServiceCardComponent.module.css";
import Link from "next/link";
export default function ServiceCardComponent(props) {
  const { title, shortDesc, icon, rout } = props;
  return (
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
        <path stroke-linecap="round" stroke-linejoin="round" d={icon}></path>
      </svg>
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-black text-center">
        {title}
      </h5>
      <p class="mb-3 font-normal text-black">{shortDesc}</p>
      <Link href={rout} class="text-white hover:text-[#1F6768]">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Clic aquí
        </button>
      </Link>
    </div>
  );
}
