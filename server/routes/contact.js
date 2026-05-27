const express = require('express');
const rateLimit = require('express-rate-limit');
const validator = require('validator');
const { Resend } = require('resend');

const router = express.Router();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { error: 'Too many messages. Please wait a minute before trying again.' },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', limiter, async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length < 1 || name.trim().length > 100) {
    return res.status(400).json({ error: 'Name must be between 1 and 100 characters.' });
  }

  if (!email || !validator.isEmail(String(email))) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 2000) {
    return res.status(400).json({ error: 'Message must be between 10 and 2000 characters.' });
  }

  const cleanName = name.trim();
  const cleanEmail = validator.normalizeEmail(email);
  const cleanMessage = message.trim();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.TO_EMAIL || 'shristish484@gmail.com',
      reply_to: cleanEmail,
      subject: `Portfolio message from ${cleanName}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:28px;background:#FAF6E8;border-radius:10px;border:1px solid #ddd;">
          <h2 style="margin:0 0 4px;font-size:1.15rem;color:#111;">New message from your portfolio</h2>
          <p style="margin:0 0 20px;font-size:0.8rem;color:#888;">Reply directly to this email to respond to ${cleanName}.</p>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr>
              <td style="padding:6px 0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;width:70px;vertical-align:top;">Name</td>
              <td style="padding:6px 0;font-size:0.95rem;font-weight:600;color:#111;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#888;vertical-align:top;">Email</td>
              <td style="padding:6px 0;font-size:0.95rem;color:#6BA6FF;">
                <a href="mailto:${cleanEmail}" style="color:#6BA6FF;text-decoration:none;">${cleanEmail}</a>
              </td>
            </tr>
          </table>

          <div style="background:#fff;border-left:4px solid #FFE872;border-radius:0 6px 6px 0;padding:16px 18px;font-size:0.95rem;line-height:1.7;color:#222;white-space:pre-wrap;">${cleanMessage}</div>

          <p style="margin-top:20px;font-size:0.75rem;color:#bbb;text-align:center;">Sent via your portfolio contact form</p>
        </div>
      `,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err.message);
    return res.status(500).json({ error: 'Could not send message. Please try again later.' });
  }
});

module.exports = router;
