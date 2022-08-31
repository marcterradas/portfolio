import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 mt-6">
      <Image
        src="/img/avatar.svg"
        alt="avatar"
        layout="fill"
        objectFit="cover"
      ></Image>
    </div>
  );
}
