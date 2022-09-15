import Link from "next/link";

export default function ContactButton({ name, link, image, color }) {
  return (
    <Link href={link} locale={false} passHref>
      <a target="_blank" className="" title={name}>
        <div>
          <div></div>
          <div className="font-sans text-base font-normal sm:text-lg">
            {name}
          </div>
        </div>
      </a>
    </Link>
  );
}
