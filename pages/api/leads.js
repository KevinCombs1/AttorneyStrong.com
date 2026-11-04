import { getAllLeads } from '../../lib/leads';
import { checkAuth } from '../../lib/auth';

export default async function handler(req, res) {
  const authError = checkAuth(req);
  if (authError) {
    return res.status(401).json({ error: authError });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leads = getAllLeads();
  return res.status(200).json({ leads });
}
