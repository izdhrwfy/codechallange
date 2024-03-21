"use client";
import Link from "next/link";
import { NavLinkProps } from "./interfacenavbar";
import { usePathname } from "next/navigation";

export default function NavLink({ item }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      key={item.label}
      className={`" block lg:inline-block text-amber-900 hover:text-neutral-900 dark:text-amber-950 uppercase font-semibold relative group overflow-hidden "  ${
        pathName === item.path
      }`}
    >
      {item?.label}
      <span className="w-full h-[1px] bg-amber-800 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
    </Link>
  );
}
