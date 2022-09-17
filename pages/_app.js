import { NextIntlProvider } from "next-intl";
import "../styles/globals.css";
// import Head from "../components/head/Head";

export default function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      {/* <Head /> */}
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}
