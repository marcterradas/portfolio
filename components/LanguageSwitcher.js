import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const { locales, locale, pathname, query, asPath } = useRouter();
  console.log(locale);
  return <div>Language Switcher ...</div>;
}
