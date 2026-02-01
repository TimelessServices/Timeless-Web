"use client";
import clsx from "clsx";
import PropTypes from "prop-types";
import Link from "next/link";

export default function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
    fullWidth = true,
    className = "",
    href = null,
    ...props
}) {
    const widthClass = fullWidth ? "w-full" : "w-auto";
    const base =
        "rounded transition text-center font-headings font-bold tracking-wide cursor-pointer";

    const variants = {
        primary:
            "bg-purple-600 text-white hover:bg-purple-700 hover:bg-white hover:text-purple-600 hover:ring-purple-600 hover:ring px-8 py-3",
        secondary:
            "bg-white text-purple-600 border border-purple-600 hover:bg-purple-700 hover:text-white px-8 py-3",
        ghost: "bg-transparent text-gray-600 hover:text-black",
        danger: "bg-red-600 text-white hover:bg-red-700 px-8 py-3",
        overlay:
            "absolute inset-0 bg-black opacity-75 hover:bg-black active:bg-black focus:outline-none px-8 py-3",
    };

    return href === null ? (
        <button
            type={type}
            onClick={onClick}
            className={clsx(base, widthClass, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    ) : (
        <Link
            href={href}
            className={clsx(base, widthClass, variants[variant], className)}
            {...props}
        >
            {children}
        </Link>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(["primary", "secondary", "ghost", "danger"]),
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
};
