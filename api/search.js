import parseQuery from './parseQuery';
import fetchBusinessData from './fetchBusinessData';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    const parsed = await parseQuery(query);
    const data = await fetchBusinessData(parsed);

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}
import parseQuery from './parseQuery';
import fetchBusinessData from './fetchBusinessData';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    const parsed = await parseQuery(query);
    const data = await fetchBusinessData(parsed);

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
}


