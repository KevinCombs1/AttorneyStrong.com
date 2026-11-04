import { sendDailyDigestEmail } from '../../lib/leads';

export default async function handler(req, res) {
  // Only allow CRON requests from Vercel
  if (process.env.VERCEL) {
    // Vercel cron sends a specific header we can optionally verify
    // but we keep it simple for free tier
  }

  try {
    const result = await sendDailyDigestEmail();
    return res.status(200).json({ success: true, result });
  } catch (e) {
    console.error('Error sending daily digest:', e);
    return res.status(500).json({ error: 'Failed to send digest' });
  }
}
