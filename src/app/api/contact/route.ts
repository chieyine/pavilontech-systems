import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    );
  }

  const formData = await req.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim() || "New contact";
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    subject && `Subject: ${subject}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `PavilonTech Systems <no-reply@${new URL(req.url).hostname}>`,
      to: [toEmail],
      replyTo: [email],
      subject: `New contact: ${subject}`,
      text,
    });

    return NextResponse.redirect(
      new URL("/contact/success", req.url),
      { status: 303 },
    );
  } catch (error) {
    console.error("Error sending contact email", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

