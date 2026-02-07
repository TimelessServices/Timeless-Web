/**
 * Split a name into first and last.
 */
export function splitName(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

/**
 * Join multiple name parts.
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

/* -------------------------------------------------------------------------------- */

function ensureHiddenIframe(id = "formspark_hidden_iframe") {
  let iframe = document.getElementById(id);
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = id;
    iframe.name = id;
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
  return iframe;
}

function postViaHiddenForm(actionUrl, payload, iframeName) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = actionUrl;
  form.target = iframeName;

  for (const [k, v] of Object.entries(payload || {})) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = k;
    input.value = v == null ? "" : String(v);
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
  form.remove();
}

export async function submitForm(payload) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPARK_ENDPOINT;
  if (!endpoint) throw new Error("Missing NEXT_PUBLIC_FORMSPARK_ENDPOINT");

  const iframe = ensureHiddenIframe();
  const iframeName = iframe.name;

  // Prevent the first load event (about:blank) from resolving incorrectly
  let resolved = false;

  return await new Promise((resolve, reject) => {
    const onLoad = () => {
      if (resolved) return;
      resolved = true;
      iframe.removeEventListener("load", onLoad);
      resolve(true);
    };

    iframe.addEventListener("load", onLoad);

    try {
      postViaHiddenForm(endpoint, payload, iframeName);

      setTimeout(() => {
        if (resolved) return;
        resolved = true;
        iframe.removeEventListener("load", onLoad);
        resolve(true);
      }, 2500);
    } catch (e) {
      iframe.removeEventListener("load", onLoad);
      reject(e);
    }
  });
}