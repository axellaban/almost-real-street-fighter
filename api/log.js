// Vercel has no writable disk, so unlike server.js this can't save to ./logs/.
// It just acknowledges the save so the in-game "log saved" flow doesn't error.
export default function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).json({ error: 'method not allowed' }); return; }
  const name = `fightlog-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
  const size = req.body ? JSON.stringify(req.body).length : 0;
  console.log('fight log received', name, size, 'bytes');
  res.status(200).json({ ok: true, name });
}
