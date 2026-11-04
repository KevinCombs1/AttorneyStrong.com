import { useState } from 'react';
import Head from 'next/head';

export default function Dashboard() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [leads, setLeads] = useState([]);
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [leadsLoaded, setLeadsLoaded] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setToken(data.token);
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  }

  async function loadLeads() {
    setLeadsLoading(true);
    try {
      const res = await fetch('/api/leads', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        setLeads(data.leads);
        setLeadsLoaded(true);
      } else {
        setError(data.error || 'Failed to load leads');
      }
    } catch (err) {
      setError('Network error');
    }
    setLeadsLoading(false);
  }

  function downloadCsv() {
    const headers = ['Submitted (PST)', 'Source', 'Name', 'Phone', 'Injury Status', 'Notes'];
    const rows = leads.map((l) => [
      new Date(l.submittedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }),
      l.source || 'Hero Form',
      l.name || '',
      l.phone || '',
      l.injuryStatus || '',
      (l.notes || '').replace(/"/g, '""'),
    ]);

    const csv = [
      headers.join(','),
      ...rows.map((r) => r.map((c) => `"${c}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!token) {
    return (
      <>
        <Head>
          <title>Doctor Login | InjuryProof Network</title>
        </Head>
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0F172A' }}>
          <div style={{ width: '100%', maxWidth: '400px', padding: '40px', background: '#1E293B', borderRadius: '16px', border: '2px solid #06B6D4', boxShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <i className="fa-solid fa-file-waveform" style={{ fontSize: '40px', color: '#06B6D4' }}></i>
              <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: '900', marginTop: '12px', textTransform: 'uppercase' }}>Doctor Login</h1>
              <p style={{ color: '#94A3B8', fontSize: '13px', marginTop: '4px' }}>InjuryProof Network Dashboard</p>
            </div>
            {error && <div style={{ color: '#f87171', background: '#7f1d1d', padding: '10px', borderRadius: '8px', marginBottom: '16px', fontSize: '13px' }}>{error}</div>}
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '6px' }}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" style={{ width: '100%', padding: '12px', background: '#0F172A', border: '1px solid #06B6D4', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', color: '#94A3B8', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '6px' }}>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" style={{ width: '100%', padding: '12px', background: '#0F172A', border: '1px solid #06B6D4', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <button type="submit" disabled={loading} style={{ width: '100%', padding: '14px', background: '#06B6D4', color: '#0F172A', border: 'none', borderRadius: '8px', fontWeight: '900', fontSize: '14px', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '1px' }}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard | InjuryProof Network</title>
      </Head>
      <div style={{ minHeight: '100vh', background: '#0F172A', color: '#fff' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #1E293B', position: 'sticky', top: 0, background: '#0F172A', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className="fa-solid fa-file-waveform" style={{ fontSize: '28px', color: '#06B6D4' }}></i>
            <div>
              <div style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Medical Proof Network</div>
              <div style={{ fontSize: '18px', fontWeight: '900' }}>INJURY<span style={{ color: '#06B6D4' }}>PROOF</span> Dashboard</div>
            </div>
          </div>
          <button onClick={() => setToken(null)} style={{ color: '#94A3B8', fontSize: '13px', background: 'none', border: '1px solid #334155', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer' }}>Logout</button>
        </div>

        {/* Controls */}
        <div style={{ padding: '24px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '900', color: '#00F2FE' }}>All Leads</h2>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={loadLeads} disabled={leadsLoading} style={{ padding: '10px 20px', background: '#06B6D4', color: '#0F172A', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', textTransform: 'uppercase' }}>
                {leadsLoading ? 'Loading...' : 'Refresh Leads'}
              </button>
              {leads.length > 0 && (
                <button onClick={downloadCsv} style={{ padding: '10px 20px', background: '#10B981', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', textTransform: 'uppercase' }}>
                  <i className="fa-solid fa-file-csv"></i> Download CSV
                </button>
              )}
            </div>
          </div>

          {error && <div style={{ color: '#f87171', background: '#7f1d1d', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>{error}</div>}

          {!leadsLoaded && !leadsLoading && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#94A3B8' }}>
              <i className="fa-solid fa-database" style={{ fontSize: '48px' }}></i>
              <p style={{ marginTop: '16px' }}>Click "Refresh Leads" to load all submissions.</p>
            </div>
          )}

          {leadsLoaded && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#1E293B' }}>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Submitted (PST)</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Source</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Name</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Phone</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Injury Status</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #06B6D4', color: '#00F2FE' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan="6" style={{ padding: '40px', textAlign: 'center', color: '#94A3B8' }}>No leads yet.</td>
                    </tr>
                  ) : (
                    leads.slice().reverse().map((lead) => (
                      <tr key={lead.id} style={{ borderBottom: '1px solid #1E293B' }}>
                        <td style={{ padding: '12px', color: '#CBD5E1' }}>{new Date(lead.submittedAt).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}</td>
                        <td style={{ padding: '12px', color: '#CBD5E1' }}>{lead.source || 'Hero Form'}</td>
                        <td style={{ padding: '12px', color: '#fff', fontWeight: 'bold' }}>{lead.name || '—'}</td>
                        <td style={{ padding: '12px', color: '#CBD5E1' }}>{lead.phone || '—'}</td>
                        <td style={{ padding: '12px', color: '#CBD5E1' }}>{lead.injuryStatus || '—'}</td>
                        <td style={{ padding: '12px', color: '#94A3B8' }}>{lead.notes || '—'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
