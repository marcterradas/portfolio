import Image from "next/image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-48 h-48 mt-6">
        <Image
          src="/img/avatar.svg"
          alt="avatar"
          layout="fill"
          objectFit="cover"
          priority={true}
        ></Image>
      </div>
    </div>
  );
}
