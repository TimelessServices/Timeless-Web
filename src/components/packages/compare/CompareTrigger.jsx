"use client";

export function CompareTrigger({ title, description, open, onOpen, triggerRef }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <button
        ref={triggerRef}
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="text-xl font-semibold text-purple-700 transition hover:scale-110 hover:text-purple-900"
      >
        {title}
      </button>

      {description ? (
        <p className="text-md text-gray-600 max-w-2xl">{description}</p>
      ) : null}
    </div>
  );
}