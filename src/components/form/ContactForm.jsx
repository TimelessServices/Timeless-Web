"use client";
import Button from "@/components/ui/Button";

import { useState } from "react";
import { buildContactPayload, submitForm } from "@/content/formspark";
import { handleContactFormSubmit } from "@/lib/validation/handleContactForm.js";

export function ContactForm({ serviceSlug = "", serviceLabel = "" }) {
  const DEFAULT_REASON = "Discuss a Project";

  const [form, setForm] = useState({
    businessName: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    reason: DEFAULT_REASON,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // NOTE: if your validator expects different keys, you must update it
    // to validate: businessName, firstName, lastName, email, mobile, reason, message
    const validationResult = handleContactFormSubmit(form);

    if (!validationResult.success) {
      setSubmitStatus({
        type: "error",
        message: "Please correct the errors in the form.",
        errors: validationResult.errors,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = buildContactPayload({
        ...form,
        service: serviceSlug,
        serviceLabel,
      });

      await submitForm(payload);

      setSubmitStatus({ type: "success", message: "Sent! We’ll reply as soon as possible." });
      setForm({
        businessName: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        reason: DEFAULT_REASON,
        message: "",
      });
    } catch (err) {
      setSubmitStatus({ type: "error", message: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassesLight =
    "mt-1 block w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors";
  const labelClassesLight = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form id="contact-form" onSubmit={handleSubmit} className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Message us</h2>

      <div className="space-y-6">
        <div>
          <label htmlFor="businessName" className={labelClassesLight}>Business name *</label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            value={form.businessName}
            onChange={handleChange}
            required
            className={inputClassesLight}
            disabled={isSubmitting}
          />
          {submitStatus?.errors?.businessName && (
            <p className="text-red-500 text-xs mt-1">{submitStatus.errors.businessName}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className={labelClassesLight}>First name *</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              required
              className={inputClassesLight}
              disabled={isSubmitting}
            />
            {submitStatus?.errors?.firstName && (
              <p className="text-red-500 text-xs mt-1">{submitStatus.errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className={labelClassesLight}>Last name *</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              required
              className={inputClassesLight}
              disabled={isSubmitting}
            />
            {submitStatus?.errors?.lastName && (
              <p className="text-red-500 text-xs mt-1">{submitStatus.errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className={labelClassesLight}>Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClassesLight}
              disabled={isSubmitting}
            />
            {submitStatus?.errors?.email && (
              <p className="text-red-500 text-xs mt-1">{submitStatus.errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="mobile" className={labelClassesLight}>Mobile *</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              required
              className={inputClassesLight}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="reason" className={labelClassesLight}>Reason for enquiry *</label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              required
              className={`${inputClassesLight} appearance-none`}
              disabled={isSubmitting}
            >
              <option value="Discuss a Project">Discuss a Project</option>
              <option value="Request a Quote">Request a Quote</option>
              <option value="Support / Updates">Support / Updates</option>
              <option value="Partnership / Referral">Partnership / Referral</option>
              <option value="Other Enquiry">Other Enquiry</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClassesLight}>Message *</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
            className={inputClassesLight}
            disabled={isSubmitting}
          />
          {submitStatus?.errors?.message && (
            <p className="text-red-500 text-xs mt-1">{submitStatus.errors.message}</p>
          )}
        </div>

        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            fullWidth={false}
            className="bg-[#9810fa] hover:bg-[#b02bff] text-white rounded-sm px-10 py-4 font-bold tracking-wide text-base transition-all shadow-[0_0_20px_rgba(152,16,250,0.3)] hover:shadow-[0_0_30px_rgba(152,16,250,0.5)]"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </div>
      </div>

      {submitStatus?.message && (
        <p
          aria-live="polite"
          className={`mt-4 text-center text-sm ${
            submitStatus.type === "error" ? "text-red-600" : "text-green-600"
          }`}
        >
          {submitStatus.message}
        </p>
      )}
    </form>
  );
}