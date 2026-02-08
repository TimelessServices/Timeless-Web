"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";
import clsx from "clsx";

export default function PocketNav({ isScrolled }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const handleLinkClick = () => setIsOpen(false);

    // Normal link styling inside the slide-in menu
    const linkClass = (href) =>
        clsx(
            "text-gray-800 hover:text-purple-600 transition",
            pathname === href && "font-semibold text-purple-600"
        );

    return (
        <>
            {/* Top bar */}
            <div
                className={clsx(
                    "fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50 transition-colors duration-300",
                    isScrolled
                        ? "bg-white text-black shadow-md"
                        : "bg-transparent text-white"
                )}
            >
                <Link href="/" className="flex items-center">
                    <Logo
                        width="120"
                        height="70"
                        fillColor={isScrolled ? "black" : "#7C3AED"}
                    />
                </Link>

                <Button
                    onClick={handleOpen}
                    variant="ghost"
                    fullWidth={false}
                    aria-label="Open menu"
                    className={isScrolled ? "text-black" : "text-white"}
                >
                    <Menu width="32" height="32" />
                </Button>
            </div>

            {/* Slide-in menu */}
            <div
                className={clsx(
                    "fixed top-0 left-0 h-screen w-screen z-50 transition-transform duration-300 ease-in-out",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Overlay */}
                <button
                    onClick={handleClose}
                    aria-label="Close overlay"
                    className="absolute inset-0 bg-black opacity-75 cursor-default"
                />

                {/* Drawer */}
                <div className="relative bg-white h-full w-4/5 max-w-sm p-6 shadow-lg z-[51]">
                    <Button
                        onClick={handleClose}
                        variant="ghost"
                        fullWidth={false}
                        aria-label="Close menu"
                        className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black"
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>

                    <nav className="flex flex-col gap-6 mt-16 text-lg font-medium">
                        <Link href="/" onClick={handleLinkClick} className={linkClass("/")}> Home </Link>
                        <Link href="/services" onClick={handleLinkClick} className={linkClass("/services")}> Services </Link>
                        <Link href="/web-packages" onClick={handleLinkClick} className={linkClass("/web-packages")}> Website Packages </Link>
                        <Link href="/socials-management" onClick={handleLinkClick} className={linkClass("/socials-management")}> Social Media Management </Link>
                        <Link href="/blog" onClick={handleLinkClick} className={linkClass("/blog")}> Blog </Link>
                        
                        <Button href="/contact" variant="primary" fullWidth={false} onClick={handleLinkClick}> Contact&nbsp;Us </Button>
                    </nav>
                </div>
            </div>
        </>
    );
}
