import Link from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ name, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className={
        pathname === href
          ? " underline link link-underline link-underline-black link-underline-active"
          : "link link-underline link-underline-black"
      }
      href={href}
    >
      {name}
    </Link>
  );
};
