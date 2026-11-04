import { VALID_EMAIL, VALID_PASSWORD, generateToken } from '../../lib/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, password } = req.body || {};

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    const token = generateToken(email, password);
    return res.status(200).json({ success: true, token });
  }

  return res.status(401).json({ error: 'Invalid email or password' });
}
