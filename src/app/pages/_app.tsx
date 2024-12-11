import "@/styles/globals.css";
import { AppProps } from "next/app";
import Navbar from "../components/Navbar";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
