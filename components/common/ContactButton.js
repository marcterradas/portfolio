import Link from "next/link";
import Image from "next/image";

export default function ContactButton({ name, link, image, color }) {
  return (
    <Link href={link} locale={false} passHref>
      <a target="_blank" className="" title={name}>
        <div className="flex items-center justify-start p-2 border-2">
          <div className="relative w-8 h-8 mr-2">
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          </div>
          <div className="font-sans text-base font-normal sm:text-lg">
            {name}
          </div>
        </div>
      </a>
    </Link>
  );
}
