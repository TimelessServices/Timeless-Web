"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function CompareDrawerShell({
  open,
  title,
  description,
  tierCount,
  capabilityCount,
  onClose,
  closeRef,
  children,
}) {
  return (
    <div
      className={["fixed inset-0 z-50", open ? "" : "pointer-events-none"].join(
        " "
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={[
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={[
          "absolute right-0 top-0 h-full w-full max-w-[1100px] bg-white shadow-2xl flex flex-col",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 p-5 sm:p-6 border-b border-gray-100 bg-white/90 backdrop-blur flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-gray-900 truncate">{title}</h3>

            <p className="text-xs text-gray-500 mt-1">
              Comparing {tierCount} tier{tierCount === 1 ? "" : "s"} •{" "}
              {capabilityCount} capabilit{capabilityCount === 1 ? "y" : "ies"}
            </p>

            {description ? (
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            ) : null}
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-xl border border-gray-200 grid place-items-center text-gray-700 hover:bg-gray-50 shrink-0"
            aria-label="Close comparison"
          >
            <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        {children}

        {/* Footer */}
        <div className="sticky bottom-0 z-10 p-4 sm:p-6 border-t border-gray-100 bg-white/90 backdrop-blur">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-2xl border border-gray-200 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Close comparison
          </button>
        </div>
      </div>
    </div>
  );
}