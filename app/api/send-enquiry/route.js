import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "happyparadisetravels@gmail.com";
const FROM_EMAIL = "Happy Paradise Website <onboarding@resend.dev>";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, date, travellers, message, source } = data || {};

  if (!name || !phone) {
    return Response.json({ error: "Name and phone are required." }, { status: 400 });
  }

  const heading = source ? escapeHtml(source) : "Website Enquiry";

  const html = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #16211c;">
      <h2 style="color:#106b49;">${heading}</h2>
      <table cellpadding="6" cellspacing="0">
        <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td><strong>Travel Date</strong></td><td>${escapeHtml(date) || "-"}</td></tr>
        <tr><td><strong>Travellers</strong></td><td>${escapeHtml(travellers) || "-"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${escapeHtml(message) || "-"}</td></tr>
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `${heading} — ${name}`,
      html,
    });

    if (error) {
      return Response.json({ error: error.message || "Failed to send email." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
