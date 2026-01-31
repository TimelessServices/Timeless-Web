import { isValidEmail, isValidMobile, isValidSubject, isValidMessage } from '@/lib/validation/regex.js';
import { isValidFullName } from '@adz946/true-name';

function nameError(name) { return isValidFullName(name) ? null : "Please enter a valid name (up to 3 words, no numbers)"; }
function emailError(email) { return isValidEmail(email) ? null : "Please enter a valid email address"; }
function mobileError(mobile) { return isValidMobile(mobile) ? null : "Please enter a valid Australian phone number"; }
function subjectError(subject) { return isValidSubject(subject) ? null : "Please select a subject"; }
function messageError(message) { return isValidMessage(message) ? null : "Message must be at least 10 characters"; }

export function validateForm(form, contactMode = 'email') {
    const errors = {};

    const validators = {
        businessName: (name) => name && name.length > 2 ? null : "Business name must be at least 3 characters",
        firstName: (name) => isValidFullName(name) ? null : "Invalid first name",
        lastName: (name) => isValidFullName(name) ? null : "Invalid last name",
        reason: subjectError,
        message: messageError,
        contact: (value) => contactMode === 'email' ? emailError(value) : mobileError(value)
    };

    for (const field in form) {
        const value = form[field];
        const validator = validators[field];
        const error = validator ? validator(value) : null;
        if (error) errors[field] = error;
    }

    return errors;
}  