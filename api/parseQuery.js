// /api/parseQuery.js

import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function parseQuery(userQuery) {
  const prompt = `User has typed: "${userQuery}". Convert this into a clean business search query. Example: "Mumbai ke t-shirt manufacturers ke contact details" → "t-shirt manufacturers in Mumbai"`;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.2,
  });

  return response.choices[0].message.content.trim();
}

