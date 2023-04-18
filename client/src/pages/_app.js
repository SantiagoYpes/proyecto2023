import "@/styles/globals.css";
import { TeacherProvider } from "../context/TeacherContext";
import NavBar from '../components/NavBar';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <TeacherProvider>
        <Component {...pageProps} />
      </TeacherProvider>
    </div>
  );
}
