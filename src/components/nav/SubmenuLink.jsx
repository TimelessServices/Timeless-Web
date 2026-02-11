// SubmenuLink.jsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/nav";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faGears,
  faChartLine,
  faPalette,
  faServer,
  faRobot,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const ICON_MAP = {
  faGlobe,
  faGears,
  faChartLine,
  faPalette,
  faServer,
  faRobot,
};

export function SubmenuLink({ child, onClick, className }) {
  const pathname = usePathname();
  const active = isActivePath(pathname, child?.href);

  if (!child?.href) return null;

  const iconDef = ICON_MAP[child.icon] ?? faCircle;

  return (
    <Link
      href={child.href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={clsx("flex items-start gap-3 w-full px-4 py-3 transition hover:bg-gray-100", 
        active && "bg-gray-200", className
      )}
    >
      <span
        className={clsx("mt-[2px] flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 text-gray-700",
            active && "bg-purple-100 text-purple-700", className
        )}
        aria-hidden="true"
      >
        <FontAwesomeIcon icon={iconDef} className="text-sm" />
      </span>

      <span className="min-w-0 flex-1">
        <span className={clsx("block text-sm font-medium", active ? "text-purple-700" : "text-gray-900")}>
          {child.label}
        </span>

        {child.synopsis ? (
          <span className="mt-0.5 block text-xs text-gray-600 line-clamp-1">
            {child.synopsis}
          </span>
        ) : null}
      </span>
    </Link>
  );
}