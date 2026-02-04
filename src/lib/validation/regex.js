export const normalizeWhitespace = (s) => String(s || "").trim().replace(/\s+/g, " ");

/**
 * Email
 */
export const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(email || "").trim());

/**
 * Australian mobile (04xx xxx xxx / +614xx xxx xxx)
 * We keep it strict because the field is called "mobile".
 */
export const isValidMobile = (mobile) => {
  const cleaned = String(mobile || "").replace(/\s+/g, "");
  return /^(\+61|0)4\d{8}$/.test(cleaned);
};

/**
 * Person name (manageable, forgiving)
 * - Letters (incl accents), spaces, apostrophes, hyphens
 * - 1 to 4 words
 * - No numbers
 */
export const isValidName = (name) => {
  const v = normalizeWhitespace(name);
  if (!v) return false;
  if (v.length < 2 || v.length > 60) return false;

  const words = v.split(" ");
  if (words.length > 4) return false;

  // Unicode letters + combining marks, allow apostrophe/hyphen inside words
  // Examples: "Adam", "O'Connor", "Jean-Luc", "María-José"
  const wordPattern = /^[\p{L}\p{M}]+(?:['-][\p{L}\p{M}]+)*$/u;
  return words.every((w) => wordPattern.test(w));
};

/**
 * Business name (more permissive)
 * - Allows letters, numbers, spaces, &, ., ,, ', -, /, ()
 * - 2 to 80 chars
 */
export const isValidBusinessName = (name) => {
  const v = normalizeWhitespace(name);
  if (!v) return false;
  if (v.length < 2 || v.length > 80) return false;

  // Must contain at least one letter or number
  if (!/[A-Za-z0-9]/.test(v)) return false;

  // Allowed characters
  return /^[A-Za-z0-9&.,'()\/\- ]+$/.test(v);
};

/**
 * Dropdown selection (reason/subject)
 */
export const isValidSelection = (value) => {
  const v = String(value || "").trim();
  return v.length > 0;
};

/**
 * Message
 */
export const isValidMessage = (msg) => normalizeWhitespace(msg).length >= 10;