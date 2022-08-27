import { NextIntlProvider } from "next-intl";

import "../styles/globals.css";

import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider>
      <Navbar />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
