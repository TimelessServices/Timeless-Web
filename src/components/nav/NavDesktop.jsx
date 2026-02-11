"use client";

import clsx from "clsx";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

import { MenuItem } from "./MenuItem";
import { menus } from "@/content/menus";
import { useEffect, useRef, useState } from "react";

export function NavDesktop({ isScrolled }) {
  const [openId, setOpenId] = useState(null);
  const navRef = useRef(null);

  const closeAll = () => setOpenId(null);

  useEffect(() => {
    const onMouseDown = (e) => {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target)) closeAll();
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeAll();
    };

    document.addEventListener("mousedown", onMouseDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-0 left-0 z-50 w-full flex items-center justify-center py-2 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="w-full max-w-[80%] flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={closeAll}>
          <Logo width="100" height="70" scrolled={isScrolled} />
        </Link>

        <div className="flex items-center gap-6">
          {menus.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              mode="desktop"
              isScrolled={isScrolled}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((curr) => (curr === item.id ? null : item.id))}
              onNavigate={closeAll}
            />
          ))}

          <Button href="/contact" variant="primary" fullWidth={false} onClick={closeAll}>
            Contact&nbsp;Us
          </Button>
        </div>
      </div>
    </nav>
  );
}