import fs from 'fs';
import path from 'path';
import { Resend } from 'resend';

// Vercel serverless functions have a writable /tmp directory.
// We persist leads there. For production, swap this for a database (Supabase, etc.).
const LEADS_FILE = path.join('/tmp', 'leads.json');
const NOTIFY_EMAIL = 'kevinjcombs1@gmail.com';

function readLeads() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
    }
  } catch (e) {
    console.error('Error reading leads file:', e);
  }
  return [];
}

function writeLeads(leads) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (e) {
    console.error('Error writing leads file:', e);
  }
}

export function addLead(lead) {
  const leads = readLeads();
  const newLead = {
    id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
    submittedAt: new Date().toISOString(),
    ...lead,
  };
  leads.push(newLead);
  writeLeads(leads);
  return newLead;
}

export function getAllLeads() {
  return readLeads();
}

export function getLeadsSince(date) {
  const leads = readLeads();
  return leads.filter((l) => new Date(l.submittedAt) >= date);
}

async function sendEmail(html, subject, to) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return { error: 'RESEND_API_KEY not configured' };
  }
  const resend = new Resend(apiKey);
  try {
    const result = await resend.emails.send({
      from: 'AttorneyStrong Leads <onboarding@resend.dev>',
      to,
      subject,
      html,
    });
    return result;
  } catch (e) {
    console.error('Error sending email:', e);
    return { error: e.message };
  }
}

function leadToHtmlRow(lead) {
  return `
    <tr>
      <td style="padding:8px;border:1px solid #ddd;">${new Date(lead.submittedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</td>
      <td style="padding:8px;border:1px solid #ddd;">${lead.source || 'Hero Form'}</td>
      <td style="padding:8px;border:1px solid #ddd;">${lead.name || ''}</td>
      <td style="padding:8px;border:1px solid #ddd;">${lead.phone || ''}</td>
      <td style="padding:8px;border:1px solid #ddd;">${lead.injuryStatus || ''}</td>
      <td style="padding:8px;border:1px solid #ddd;">${lead.notes || ''}</td>
    </tr>
  `;
}

function leadsToHtmlTable(leads) {
  if (!leads.length) {
    return '<p style="font-size:16px;color:#666;">No leads submitted in this period.</p>';
  }
  return `
    <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
      <thead>
        <tr style="background:#0F172A;color:#00F2FE;">
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Submitted (PST)</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Source</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Name</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Phone</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Injury Status</th>
          <th style="padding:8px;border:1px solid #ddd;text-align:left;">Notes</th>
        </tr>
      </thead>
      <tbody>
        ${leads.map(leadToHtmlRow).join('')}
      </tbody>
    </table>
  `;
}

export async function sendLeadNotificationEmail(lead) {
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#0F172A;">New Lead Received</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">
        <tr><td style="padding:6px;font-weight:bold;">Submitted:</td><td style="padding:6px;">${new Date(lead.submittedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Source:</td><td style="padding:6px;">${lead.source || 'Hero Form'}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Name:</td><td style="padding:6px;">${lead.name || ''}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Phone:</td><td style="padding:6px;">${lead.phone || ''}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Injury Status:</td><td style="padding:6px;">${lead.injuryStatus || ''}</td></tr>
        <tr><td style="padding:6px;font-weight:bold;">Notes:</td><td style="padding:6px;">${lead.notes || ''}</td></tr>
      </table>
      <p style="margin-top:20px;color:#666;font-size:12px;">This lead has been stored in the dashboard.</p>
    </div>
  `;
  return sendEmail(html, 'New Lead: ' + (lead.name || 'Unknown'), NOTIFY_EMAIL);
}

export async function sendDailyDigestEmail() {
  // 8:00am PST = 16:00 UTC (PST is UTC-8). During PDT (UTC-7) it would be 15:00 UTC.
  // The cron runs at 16:00 UTC which covers PST.
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const leads = getLeadsSince(since);

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:800px;margin:0 auto;">
      <h2 style="color:#0F172A;">Daily Lead Digest — ${new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' })}</h2>
      <p style="font-size:16px;">Total leads since last digest: <strong>${leads.length}</strong></p>
      ${leadsToHtmlTable(leads)}
      <p style="margin-top:20px;color:#666;font-size:12px;">Log in to the dashboard to view all leads and download as CSV.</p>
    </div>
  `;
  return sendEmail(html, `Daily Lead Digest: ${leads.length} new lead(s) — ${new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' })}`, NOTIFY_EMAIL);
}
