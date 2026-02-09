"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import clsx from "clsx";
import Button from "../ui/Button";

export default function Navbar({ isScrolled }) {
    const pathname = usePathname();

    // Dynamic link styles
    const linkClass = (href) => {
        const baseColor = isScrolled ? "text-black" : "text-white";
        return clsx(
            baseColor,
            "hover:underline transition",
            pathname === href && "font-semibold underline underline-offset-4"
        );
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 z-50 w-full flex items-center justify-center py-2 transition-all duration-300",
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
            )}
        >
            <div className="w-full max-w-[80%] flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Logo width="100" height="70" scrolled={isScrolled} />
                </Link>

                {/* Nav links */}
                <div className="flex items-center gap-6">
                    <Link href="/" className={linkClass("/")}> Home </Link>
                    <Link href="/services" className={linkClass("/services")}> Services </Link>
                    <Link href="/packages" className={linkClass("/packages")}> Packages </Link>
                    <Link href="/blog" className={linkClass("/blog")}> Blog </Link>

                    <Button href="/contact" variant="primary" fullWidth={false}> Contact&nbsp;Us </Button>
                </div>
            </div>
        </nav>
    );
}
