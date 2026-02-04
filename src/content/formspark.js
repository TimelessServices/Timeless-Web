/**
 * Split a "name" into first/last. Best-effort.
 */
export function splitName(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

/**
 * Join multiple name parts safely.
 */
export function joinName(parts = []) {
  return (Array.isArray(parts) ? parts : [])
    .map((p) => String(p || "").trim())
    .filter(Boolean)
    .join(" ");
}

/**
 * Header form payload builder (light form)
 * raw: { name, email, mobile, message, service, serviceLabel }
 */
export function buildHeaderPayload(raw = {}) {
  const contact = String(raw.name || "").trim();
  const { firstName, lastName } = splitName(contact);

  const email = String(raw.email || "").trim();
  const mobile = String(raw.mobile || "").trim();
  const message = String(raw.message || "").trim();

  const service = String(raw.service || "").trim();
  const serviceLabel = String(raw.serviceLabel || "").trim();

  const subject = `Quote regarding ${serviceLabel || "Service"} from ${contact || "Unknown"}`;

  return {
    contact,
    email,
    mobile,
    firstName,
    lastName,
    subject,
    message,
    service,
    source: "header-form",
  };
}

/**
 * Contact form payload builder (full form)
 * raw: { businessName, firstName, lastName, email, mobile, reason, message, service, serviceLabel }
 */
export function buildContactPayload(raw = {}) {
  const businessName = String(raw.businessName || "").trim();
  const fn = String(raw.firstName || "").trim();
  const ln = String(raw.lastName || "").trim();

  // Prefer business name as "contact" if provided, else fall back to person name.
  const contact = businessName || joinName([fn, ln]) || "";

  // Ensure we always have first/last (best effort)
  const split = splitName(contact);
  const firstName = fn || split.firstName;
  const lastName = ln || split.lastName;

  const email = String(raw.email || "").trim();
  const mobile = String(raw.mobile || "").trim();
  const message = String(raw.message || "").trim();

  const selectedReason = String(raw.reason || "").trim() || "Other Enquiry";
  const service = String(raw.service || "").trim();
  const serviceLabel = String(raw.serviceLabel || "").trim();

  const subject = `${selectedReason} — ${serviceLabel || "Service"} — ${contact || "Unknown"}`;

  return {
    contact,
    email,
    mobile,
    firstName,
    lastName,
    subject,
    message,
    service,
    source: "contact-form",
  };
}

export async function submitForm(payload) {
  const res = await fetch("/api/formspark", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload || {}),
  });

  if (res.ok) return true;

  const data = await res.json().catch(() => ({}));
  throw new Error(data?.error || "Form submission failed");
}