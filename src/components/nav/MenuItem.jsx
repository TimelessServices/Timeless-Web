// MenuItem.jsx
"use client";

import clsx from "clsx";
import { NavLink } from "./NavLink";
import { SubmenuLink } from "./SubmenuLink";
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

  // mobile controlled submenu state
  isOpen = false,
  onToggle,
}) {
  const withChildren = hasChildren(item);
  const children = withChildren ? [...(item.children ?? [])] : [];

  // Simple items
  if (!withChildren) {
    return (
      <div className={clsx(mode === "desktop" && "group inline-flex items-center")}>
        <NavLink
          href={item.href}
          onClick={onNavigate}
          variant={mode === "mobile" ? "mobile" : "desktop"}
          isScrolled={isScrolled}
          className={clsx(
            mode === "desktop" &&
              "group-hover:underline group-hover:underline-offset-6 hover:underline hover:underline-offset-6"
          )}
        >
          {item.label}
        </NavLink>
      </div>
    );
  }

  // DESKTOP: CSS-only hover dropdown (normal, minimal)
  if (mode === "desktop") {
    return (
      <div className="relative group">
        <div className="inline-flex items-center gap-1">
          <NavLink
            href={item.href}
            variant="desktop"
            isScrolled={isScrolled}
            className="group-hover:underline group-hover:underline-offset-6 hover:underline hover:underline-offset-6"
          >
            {item.label}
          </NavLink>

          {/* Chevron is visual (not the only trigger) */}
          <span
            className={clsx(
              "inline-flex items-center justify-center rounded-md px-2 py-1",
              isScrolled ? "text-black" : "text-white",
              "opacity-90 group-hover:opacity-100 transition"
            )}
            aria-hidden="true"
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
            />
          </span>
        </div>

        {/* Invisible “bridge” so moving into the panel doesn’t drop hover */}
        <div className="absolute left-0 top-full h-3 w-full" />

        {/* Panel: hidden by default, shown on hover OR keyboard focus */}
        <div
          role="menu"
          className={clsx(
            "absolute left-0 top-full mt-3 min-w-72 rounded-xl border bg-white shadow-lg",
            "invisible opacity-0 translate-y-1 pointer-events-none",
            "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
            "group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto",
            "transition duration-150"
          )}
        >
          <div className="py-2">
            {children.map((child) => (
              <SubmenuLink
                key={child.id}
                child={child}
                variant="dropdown"
                onClick={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // MOBILE: click accordion (keep your current state behaviour)
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        {/* LEFT: real link only */}
        <NavLink
          href={item.href}
          variant="mobile"
          onClick={onNavigate}
          className="text-lg font-medium pr-4"
        >
          {item.label}
        </NavLink>

        {/* RIGHT: everything else opens submenu */}
        <button
          type="button"
          onClick={onToggle}
          aria-label={`Toggle ${item.label} menu`}
          aria-expanded={isOpen}
          className="flex-1 flex justify-end items-center p-2 text-gray-700 hover:text-black transition"
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className={clsx(
              "text-sm transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 ml-3 flex flex-col gap-3 border-l pl-4">
          {children.map((child) => (
            <SubmenuLink
              key={child.id}
              child={child}
              variant="mobile"
              onClick={onNavigate}
            />
          ))}
        </div>
      )}
    </div>
  );
}