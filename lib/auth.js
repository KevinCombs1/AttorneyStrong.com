// Simple auth using a token-based approach for the free tier
// Credentials: kevin@travelmana.com / FranklinFocus1000
// The dashboard sets a base64 token in cookies/localStorage

const VALID_EMAIL = 'kevin@travelmana.com';
const VALID_PASSWORD = 'FranklinFocus1000';

export function checkAuth(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return 'Unauthorized: No token provided';
  }

  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [email, password] = decoded.split(':');
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      return null; // Auth OK
    }
  } catch (e) {
    // fall through
  }
  return 'Unauthorized: Invalid credentials';
}

export function generateToken(email, password) {
  return Buffer.from(`${email}:${password}`).toString('base64');
}

export { VALID_EMAIL, VALID_PASSWORD };
