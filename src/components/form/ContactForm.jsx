"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { handleContactFormSubmit } from "@/lib/validation/handleContactForm.js";

export default function ContactForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        businessName: "",
        firstName: "",
        lastName: "",
        contact: "", // This is email
        phone: "",
        reason: "I'd like to discuss a project",
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
        setIsSubmitting(true);
        setSubmitStatus(null);

        const validationResult = handleContactFormSubmit(form, "email");

        if (!validationResult.success) {
            console.warn("Validation failed:", validationResult.errors);
            setSubmitStatus({
                type: "error",
                message: "Please correct the errors in the form.",
                errors: validationResult.errors,
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.formspark.io/k2BmGYeHC", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                router.push("/thank-you");
                setForm({
                    businessName: "",
                    firstName: "",
                    lastName: "",
                    contact: "",
                    phone: "",
                    reason: "I'd like to discuss a project",
                    message: "",
                });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: "Submission failed. Please try again.",
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: "error",
                message: "Network error. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Light Theme Styles
    const inputClassesLight = "mt-1 block w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-600 transition-colors";
    const labelClassesLight = "block text-sm font-medium text-gray-700 mb-1";


    return (
        <form id="contact-form" onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-4">Message us</h2>

            <div className="space-y-6">
                {/* Business Name */}
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
                    {submitStatus?.errors?.businessName && <p className="text-red-500 text-xs mt-1">{submitStatus.errors.businessName}</p>}
                </div>

                {/* Name Row */}
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
                        {submitStatus?.errors?.firstName && <p className="text-red-500 text-xs mt-1">{submitStatus.errors.firstName}</p>}
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
                        {submitStatus?.errors?.lastName && <p className="text-red-500 text-xs mt-1">{submitStatus.errors.lastName}</p>}
                    </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="contact" className={labelClassesLight}>Email *</label>
                        <input
                            id="contact"
                            name="contact"
                            type="email"
                            value={form.contact}
                            onChange={handleChange}
                            required
                            className={inputClassesLight}
                            disabled={isSubmitting}
                        />
                        {submitStatus?.errors?.contact && <p className="text-red-500 text-xs mt-1">{submitStatus.errors.contact}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone" className={labelClassesLight}>Phone *</label>
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            className={inputClassesLight}
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                {/* Reason for enquiry */}
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
                            <option value="I'd like to discuss a project">I'd like to discuss a project</option>
                            <option value="Support question">Support question</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Message */}
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
                    {submitStatus?.errors?.message && <p className="text-red-500 text-xs mt-1">{submitStatus.errors.message}</p>}
                </div>

                {/* Submit Button */}
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
                <p className={`mt-4 text-center text-sm ${submitStatus.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
                    {submitStatus.message}
                </p>
            )}
        </form>
    );
}
