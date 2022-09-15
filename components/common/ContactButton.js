import Link from "next/link";
import Image from "next/image";

export default function ContactButton({ name, link, image }) {
  return (
    <Link href={link} locale={false} passHref>
      <a target="_blank" className="" title={name}>
        <div className="flex items-center justify-start w-40 h-12 p-2 transition-colors duration-300 ease-linear border-2 rounded-sm border-stone-200 hover:bg-stone-200">
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
