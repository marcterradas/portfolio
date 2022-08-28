import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Navbar />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
