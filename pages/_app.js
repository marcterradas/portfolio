import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";
import Header from "../components/head/Head";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Header />
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
