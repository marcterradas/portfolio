import Linkedin from "../components/footer/Linkedin";
import Github from "../components/footer/Github";
import Email from "../components/footer/Email";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 mb-4 align-middle">
      <Linkedin />
      <Github />
      <Email />
    </footer>
  );
}
