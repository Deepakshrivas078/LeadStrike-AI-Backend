// /api/search.js

import { parseQuery } from './parseQuery.js';
import { fetchBusinessData } from './fetchBusinessData.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: 'No query provided' });
  }

  try {
    const parsedQuery = await parseQuery(query);
    const results = await fetchBusinessData(parsedQuery);
    res.status(200).json({ data: results });
  } catch (err) {
    console.error('Search Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

