"use client";

import clsx from "clsx";
import Link from "next/link";
import Logo from "../ui/Logo";
import Button from "@/components/ui/Button";

import { MenuItem } from "./MenuItem";
import { menus } from "@/content/menus";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

export function NavMobile({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const closeBtnRef = useRef(null);

  const open = () => setIsOpen(true);

  const close = () => {
    setIsOpen(false);
    setOpenId(null);
  };

  // lock scroll + ESC close
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);

    // focus close button for keyboard users
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 transition-colors duration-300",
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        )}
      >
        <Link href="/" className="flex items-center" onClick={close}>
          <Logo width="120" height="70" fillColor={isScrolled ? "black" : "#7C3AED"} />
        </Link>

        <Button
          onClick={open}
          variant="ghost"
          fullWidth={false}
          aria-label="Open menu"
          className={isScrolled ? "text-black" : "text-white"}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </Button>
      </div>

      <div
        className={clsx(
          "fixed top-0 left-0 h-screen w-screen z-50 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={!isOpen}
      >
        <button
          onClick={close}
          aria-label="Close overlay"
          className="absolute inset-0 bg-black opacity-75 cursor-pointer"
        />

        <div className="relative bg-white h-full w-4/5 max-w-sm p-6 shadow-lg z-[51]">
          <Button
            ref={closeBtnRef}
            onClick={close}
            variant="ghost"
            fullWidth={false}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>

          <div className="flex flex-col gap-6 mt-16">
            {menus.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                mode="mobile"
                isOpen={openId === item.id}
                onToggle={() => setOpenId((curr) => (curr === item.id ? null : item.id))}
                onNavigate={close}
              />
            ))}

            <div className="mt-2">
              <Button href="/contact" variant="primary" fullWidth={false} onClick={close}>
                Contact&nbsp;Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}