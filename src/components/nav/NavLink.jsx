"use client";

import clsx from "clsx";
import Link from "next/link";
import { isActivePath } from "@/lib/nav";
import { usePathname } from "next/navigation";

// variant == "desktop" | "mobile" | "dropdown"
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
    desktop: clsx(
      isScrolled ? "text-black" : "text-white", "hover:underline transition underline-offset-6",
      active && "font-semibold underline"
    ),
    mobile: clsx(
      "text-gray-800 hover:text-purple-600 transition",
      active && "font-semibold text-purple-600"
    ),
    dropdown: clsx(
      "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-50",
      active && "font-semibold text-purple-600"
    ),
  };

  const base = styles[variant] ?? styles.desktop;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={clsx(base, className)}
    >
      {children}
    </Link>
  );
}