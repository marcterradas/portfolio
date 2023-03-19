import Image from "next/image";

export default function ProjectImage({ image }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-48 h-48 mt-6 lg:w-56 lg:h-56">
        <Image
          src={`/img/${image}.png`}
          alt={image}
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          sizes="h-40 w-40"
        ></Image>
      </div>
    </div>
  );
}
