import LanguageProvider from "@/infrastructure/LanguageProvider";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
