import LanguageProvider from "Infrastructure/providers/Language";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
