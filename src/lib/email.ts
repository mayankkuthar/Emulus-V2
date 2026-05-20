import emailjs from "@emailjs/browser";

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const contactTemplateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID as string;
const bookingTemplateId = import.meta.env.VITE_EMAILJS_BOOKING_TEMPLATE_ID as string;

export function isEmailConfigured() {
  return publicKey && publicKey !== "your_public_key_here";
}

export async function sendContactForm({
  name,
  email,
  company,
  country,
  message,
  token,
}: {
  name: string;
  email: string;
  company: string;
  country: string;
  message: string;
  token: string;
}) {
  return emailjs.send(serviceId, contactTemplateId, {
    name,
    email,
    company,
    country,
    message,
    "cf-turnstile-response": token,
  }, { publicKey });
}

export async function sendBookingNotification({
  name,
  email,
  phone,
  date,
  time,
  timezone,
  notes,
  token,
}: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  timezone: string;
  notes: string;
  token: string;
}) {
  return emailjs.send(serviceId, bookingTemplateId, {
    name,
    email,
    phone,
    meeting_date: date,
    meeting_time: time,
    timezone,
    notes,
    "cf-turnstile-response": token,
  }, { publicKey });
}
