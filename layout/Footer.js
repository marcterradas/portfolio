import Linkedin from "../components/footer/Linkedin";
import Github from "../components/footer/Github";
import Email from "../components/footer/Email";

export default function Footer() {
  return (
    <footer className="h-16">
      <Linkedin />
      <Github />
      <Email />
    </footer>
  );
}
