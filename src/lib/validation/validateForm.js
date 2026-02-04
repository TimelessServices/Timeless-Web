import {
  isValidEmail,
  isValidMobile,
  isValidName,
  isValidBusinessName,
  isValidSelection,
  isValidMessage,
} from "@/lib/validation/regex.js";

const err = {
  name: "Please enter a valid name",
  firstName: "Please enter a valid first name",
  lastName: "Please enter a valid last name",
  businessName: "Please enter a valid business name",
  email: "Please enter a valid email address",
  mobile: "Please enter a valid Australian mobile number",
  reason: "Please select a reason",
  subject: "Please select a subject",
  message: "Message must be at least 10 characters",
};

export function validateForm(form) {
  const errors = {};
  const has = (k) => Object.prototype.hasOwnProperty.call(form, k);

  // HeaderForm: name
  if (has("name")) {
    if (!isValidName(form.name)) errors.name = err.name;
  }

  // ContactForm: businessName / firstName / lastName
  if (has("businessName")) {
    if (!isValidBusinessName(form.businessName)) errors.businessName = err.businessName;
  }

  if (has("firstName")) {
    if (!isValidName(form.firstName)) errors.firstName = err.firstName;
  }

  if (has("lastName")) {
    // Allow empty lastName if you want; you can switch this to required later
    const v = String(form.lastName || "").trim();
    if (v && !isValidName(v)) errors.lastName = err.lastName;
  }

  // Shared: email / mobile
  if (has("email")) {
    if (!isValidEmail(form.email)) errors.email = err.email;
  }

  if (has("mobile")) {
    if (!isValidMobile(form.mobile)) errors.mobile = err.mobile;
  }

  // ContactForm dropdown: reason (or subject if you later choose that)
  if (has("reason")) {
    if (!isValidSelection(form.reason)) errors.reason = err.reason;
  }

  if (has("subject")) {
    if (!isValidSelection(form.subject)) errors.subject = err.subject;
  }

  // Shared: message
  if (has("message")) {
    if (!isValidMessage(form.message)) errors.message = err.message;
  }

  return errors;
}