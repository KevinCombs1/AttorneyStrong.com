import { addLead, sendLeadNotificationEmail } from '../../lib/leads';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const lead = addLead({
      name: req.body.name || '',
      phone: req.body.phone || '',
      email: req.body.email || '',
      injuryStatus: req.body.injuryStatus || '',
      notes: req.body.notes || '',
      source: req.body.source || 'Hero Form',
    });

    // Await the email so the serverless function stays alive long enough
    let emailResult = null;
    try {
      emailResult = await sendLeadNotificationEmail(lead);
    } catch (e) {
      console.error('Failed to send notification email:', e);
      emailResult = { error: e.message };
    }

    return res.status(200).json({ success: true, id: lead.id, emailSent: !emailResult?.error });
  } catch (e) {
    console.error('Error submitting lead:', e);
    return res.status(500).json({ error: 'Failed to submit lead' });
  }
}
