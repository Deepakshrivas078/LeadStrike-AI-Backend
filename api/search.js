// api/search.js

import parseQuery from './parseQuery';
import fetchBusinessData from './fetchBusinessData';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'Query missing' });
  }

  try {
    const parsed = await parseQuery(query);         // clean query
    const data = await fetchBusinessData(parsed);   // get business info

    return res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Error in search:", err);
    return res.status(500).json({ error: 'Server error' });
  }
}



