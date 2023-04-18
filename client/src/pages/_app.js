import "@/styles/globals.css";
import { TeacherProvider } from "../context/TeacherContext";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <TeacherProvider>
        <Component {...pageProps} />
      </TeacherProvider>
    </div>
  );
}
