export default function List({ children }) {
  return (
    <ul className="font-sans text-sm font-normal list-disc sm:text-base">
      {children}
    </ul>
  );
}
