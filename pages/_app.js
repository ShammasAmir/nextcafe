import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Header from "@/components/modules/Header";
import Footer from "@/components/modules/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
