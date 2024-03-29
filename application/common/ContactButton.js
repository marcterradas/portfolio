import Link from "@/infrastructure/components/Link";
import Image from "@/infrastructure/components/Image";

export default function ContactButton({ name, link, image }) {
  return (
    <Link href={link} locale={false} target="_blank" title={name}>
      <div className="flex items-center justify-start w-40 h-12 p-2 transition-colors duration-300 ease-linear rounded-sm hover:bg-stone-200 bg-stone-100">
        <div className="relative w-8 h-8 mr-2">
          <Image src={image} alt={name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="font-sans text-base font-normal sm:text-lg">{name}</div>
      </div>
    </Link>
  );
}
