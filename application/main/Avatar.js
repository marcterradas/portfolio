import Image from "@/infrastructure/components/Image";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-48 h-48 mt-6 lg:w-64 lg:h-64">
        <Image
          src="/img/avatar.png"
          alt="avatar"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
          sizes="h-64 w-64"
        ></Image>
      </div>
    </div>
  );
}
