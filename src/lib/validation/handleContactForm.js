import { validateForm } from "@/lib/validation/validateForm.js";

/**
 * Handles form submission validation logic.
 * Works for both HeaderForm and ContactForm.
 *
 * @param {Object} form - Form field values
 * @returns {Object} - { success, errors }
 */
export function handleContactFormSubmit(form) {
  const errors = validateForm(form);
  if (Object.keys(errors).length > 0) return { success: false, errors };

  console.log("✅ Form validated:", form);
  return { success: true, errors: {} };
}