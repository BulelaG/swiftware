export async function sendEmail({ to, subject, text, html }) {
  if (!process.env.SMTP_HOST) throw new Error('SMTP is not configured');
  const nodemailer = await import('nodemailer');
  const transport = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
  return transport.sendMail({ from: process.env.MAIL_FROM, to, subject, text, html });
}
