import Link from "next/link";
export default function NavbarLink({ children, href, size, fw }) {
  return (
    <Link href={href} className={`uppercase hover:text-red-600 ${size} ${fw}`}>
      {children}
    </Link>
  );
}
