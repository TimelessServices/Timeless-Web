"use client";
import clsx from "clsx";

import { NavLink } from "./NavLink";
import { hasChildren } from "@/lib/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// mode == "desktop" | "mobile"
export function MenuItem({
  item,
  mode,
  isScrolled = false,

  // navigation callback (close drawer / close dropdown)
  onNavigate,

  // controlled submenu state
  isOpen = false,
  onToggle,
}) {
  const withChildren = hasChildren(item);

  // Sub-menu children items
  const children = withChildren ? [ ...(item.children ?? []) ] : [];

  // Simple items
  if (!withChildren) {
    return (
      <NavLink
        href={item.href}
        onClick={onNavigate}
        variant={mode === "mobile" ? "mobile" : "desktop"}
        isScrolled={isScrolled}
      >
        {item.label}
      </NavLink>
    );
  }

  // Desktop: link + chevron button + dropdown panel
  if (mode === "desktop") {
    return (
      <div className="relative flex items-center gap-1">
        <NavLink href={item.href} variant="desktop" isScrolled={isScrolled}>
          {item.label}
        </NavLink>

        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${item.label} menu`}
          aria-haspopup="menu"
          aria-expanded={isOpen}
          className={clsx(
            "inline-flex items-center justify-center rounded-md px-2 py-1",
            isScrolled ? "text-black" : "text-white",
            "hover:opacity-80 transition"
          )}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={clsx("text-xs transition-transform duration-200", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <div
            role="menu"
            className={clsx(
              "absolute left-0 top-full mt-3 min-w-56 rounded-xl border bg-white shadow-lg"
            )}
          >
            <div className="py-2">
              {children.map((child) => (
                <NavLink
                  key={child.id}
                  href={child.href}
                  variant="dropdown"
                  onClick={onNavigate}
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Mobile: link row + chevron toggler + accordion panel
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <NavLink
          href={item.href}
          variant="mobile"
          onClick={onNavigate}
          className="text-lg font-medium"
        >
          {item.label}
        </NavLink>

        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${item.label} menu`}
          aria-expanded={isOpen}
          className="p-2 text-gray-700 hover:text-black transition"
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={clsx("text-sm transition-transform duration-200", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 ml-3 flex flex-col gap-3 border-l pl-4">
          {children.map((child) => (
            <NavLink
              key={child.id}
              href={child.href}
              variant="mobile"
              onClick={onNavigate}
              className="text-base text-gray-700"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}