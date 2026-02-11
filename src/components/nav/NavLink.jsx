// NavLink.jsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { isActivePath } from "@/lib/nav";
import { usePathname } from "next/navigation";

// variant == "desktop" | "mobile"
export function NavLink({
  href,
  children,
  onClick,
  variant = "desktop",
  isScrolled = false,
  className,
}) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  const styles = {
    desktop: clsx( isScrolled ? "text-black" : "text-white", "transition", active && "font-semibold underline underline-offset-6"),
    mobile: clsx( "text-gray-800 transition", "hover:text-purple-600", active && "font-semibold text-purple-600" )
  };

  const base = styles[variant] ?? styles.desktop;

  return (
    <Link href={href} onClick={onClick} aria-current={active ? "page" : undefined} className={clsx(base, className)}>
      {children}
    </Link>
  );
}