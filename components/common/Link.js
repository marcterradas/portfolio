import Link from "next/link";

export default function CustomLink({ children, href, title = false }) {
  return (
    <Link
      href={href}
      locale={false}
      target="_blank"
      title={title ? title : children}
      className="underline"
    >
      {children}
    </Link>
  );
}
