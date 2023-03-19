import Image from "next/image";

export default function ProjectImage() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-32 h-32 mt-6 lg:w-40 lg:h-40">
        <Image
          src="/img/placeholder.svg"
          alt="placeholder"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          sizes="h-40 w-40"
        ></Image>
      </div>
    </div>
  );
}
