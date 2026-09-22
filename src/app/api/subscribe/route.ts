import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const FROM_ADDRESS = "ROOTED <hello@rootedym.com>";
const SAMPLE_PDF_URL = new URL("/rooted-sample-lesson.pdf", siteConfig.url).toString();
const RESOURCES_URL = new URL("/resources", siteConfig.url).toString();
const REVIEW_URL = "https://rootedym.com/review";
const EMAIL_LINK_STYLE =
  "color: #d97706; font-weight: 600; text-decoration: underline;";

type SubscribeType = "sample" | "resources";

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isSubscribeType(value: unknown): value is SubscribeType {
  return value === "sample" || value === "resources";
}

function sampleEmail() {
  const text = `Hi there,

Thank you so much for requesting a sample from ROOTED.

I wrote this curriculum because I know what it's like to stare at a blank page on a Tuesday night, trying to figure out what you're going to teach your students this week. ROOTED exists so you never have to do that again.

You can download your sample week here: ${SAMPLE_PDF_URL}

Inside, you'll find one complete week exactly as it appears in the full 52-week curriculum: the game, the message, the small group questions, the weekly challenge, and the closing prayer.

I'd love to hear how it goes with your group — leave a quick review here: ${REVIEW_URL}

Grace and peace,
Jeremy Johnson
Author, ROOTED`;

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a2436; line-height: 1.6;">
      <p>Hi there,</p>
      <p>Thank you so much for requesting a sample from ROOTED.</p>
      <p>I wrote this curriculum because I know what it's like to stare at a blank page on a Tuesday night, trying to figure out what you're going to teach your students this week. ROOTED exists so you never have to do that again.</p>
      <p style="margin: 24px 0;">
        <a href="${SAMPLE_PDF_URL}" style="background: #d97706; color: #ffffff; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; display: inline-block;">
          Download Your Sample Lesson
        </a>
      </p>
      <p>Inside, you'll find one complete week exactly as it appears in the full 52-week curriculum: the game, the message, the small group questions, the weekly challenge, and the closing prayer.</p>
      <p>I'd love to hear how it goes with your group — <a href="${REVIEW_URL}" style="${EMAIL_LINK_STYLE}">leave a quick review</a>.</p>
      <p>Grace and peace,<br />Jeremy Johnson<br />Author, ROOTED</p>
    </div>
  `;

  return {
    subject: "Your ROOTED Sample Lesson Plan",
    text,
    html,
  };
}

function resourcesEmail() {
  const text = `Hi there,

Welcome to the ROOTED Resources & Leader Network!

Your email is confirmed, and you now have full access to every supplemental resource we've built to go with the curriculum — 52-week supply lists, printable student cards, and social media packages.

You can find everything here: ${RESOURCES_URL}

I'd love to hear how ROOTED is going with your students — share your feedback here: ${REVIEW_URL}

Grace and peace,
Jeremy Johnson
Author, ROOTED`;

  const html = `
    <div style="font-family: -apple-system, Segoe UI, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1a2436; line-height: 1.6;">
      <p>Hi there,</p>
      <p>Welcome to the ROOTED Resources &amp; Leader Network!</p>
      <p>Your email is confirmed, and you now have full access to every supplemental resource we've built to go with the curriculum — 52-week supply lists, printable student cards, and social media packages.</p>
      <p style="margin: 24px 0;">
        <a href="${RESOURCES_URL}" style="background: #d97706; color: #ffffff; padding: 12px 24px; border-radius: 999px; text-decoration: none; font-weight: 600; display: inline-block;">
          Go to ROOTED Resources
        </a>
      </p>
      <p>I'd love to hear how ROOTED is going with your students — <a href="${REVIEW_URL}" style="${EMAIL_LINK_STYLE}">share your feedback</a>.</p>
      <p>Grace and peace,<br />Jeremy Johnson<br />Author, ROOTED</p>
    </div>
  `;

  return {
    subject: "Welcome to ROOTED Resources & Leader Network",
    text,
    html,
  };
}

async function syncContact(resend: Resend, email: string) {
  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
  });

  if (error) {
    console.error("[subscribe] Failed to sync contact to Resend audience:", error);
  }
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { email, type } = (body ?? {}) as { email?: unknown; type?: unknown };

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  if (!isSubscribeType(type)) {
    return NextResponse.json(
      { error: "type must be 'sample' or 'resources'." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[subscribe] RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured (missing RESEND_API_KEY)." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await syncContact(resend, email);

    const { subject, text, html } =
      type === "sample" ? sampleEmail() : resourcesEmail();

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[subscribe] Failed to send welcome email:", error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[subscribe] Unexpected error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to process subscription: ${message}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
