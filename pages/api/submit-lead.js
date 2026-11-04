import { addLead, sendLeadNotificationEmail } from '../../lib/leads';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const lead = addLead({
      name: req.body.name || '',
      phone: req.body.phone || '',
      injuryStatus: req.body.injuryStatus || '',
      notes: req.body.notes || '',
      source: req.body.source || 'Hero Form',
    });

    // Fire and forget — don't block the response on email
    sendLeadNotificationEmail(lead).catch((e) => {
      console.error('Failed to send notification email:', e);
    });

    return res.status(200).json({ success: true, id: lead.id });
  } catch (e) {
    console.error('Error submitting lead:', e);
    return res.status(500).json({ error: 'Failed to submit lead' });
  }
}
