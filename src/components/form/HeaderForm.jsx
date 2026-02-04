"use client";
import Button from "../ui/Button";

import { useState } from "react";
import { buildHeaderPayload, submitForm } from "@/content/formspark";
import { handleContactFormSubmit } from "@/lib/validation/handleContactForm.js";

export function HeaderForm({ serviceSlug = "", serviceLabel = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // { type: "success"|"error", message: string, errors?: Record<string,string> }
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status) setStatus(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus(null);

    // Validate (same flow as ContactForm)
    const validationResult = handleContactFormSubmit(form);
    if (!validationResult.success) {
      setStatus({
        type: "error",
        message: "Please correct the errors in the form.",
        errors: validationResult.errors,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = buildHeaderPayload({
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.message,
        service: serviceSlug,
        serviceLabel,
      });

      await submitForm(payload);

      setStatus({ type: "success", message: "Sent! We’ll be in touch shortly." });
      setForm({ name: "", email: "", mobile: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Couldn’t send right now. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9810fa]"
          disabled={isSubmitting}
        />
        {status?.errors?.name && (
          <p className="text-red-500 text-xs mt-1">{status.errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9810fa]"
          disabled={isSubmitting}
        />
        {status?.errors?.email && (
          <p className="text-red-500 text-xs mt-1">{status.errors.email}</p>
        )}
      </div>

      <div>
        <input
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile"
          required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9810fa]"
          disabled={isSubmitting}
        />
        {status?.errors?.mobile && (
          <p className="text-red-500 text-xs mt-1">{status.errors.mobile}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={3}
          required
          className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#9810fa]"
          disabled={isSubmitting}
        />
        {status?.errors?.message && (
          <p className="text-red-500 text-xs mt-1">{status.errors.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>

      {status?.message && (
        <p
          aria-live="polite"
          className={`text-sm mt-2 ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}