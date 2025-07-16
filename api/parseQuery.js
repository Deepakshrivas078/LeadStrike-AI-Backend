// api/parseQuery.js

export default async function parseQuery(query) {
  // Jab OpenAI key hogi, yahan GPT se parsing karenge
  if (!process.env.OPENAI_API_KEY) {
    console.warn("OPENAI_API_KEY missing. Using fallback logic.");

    const lower = query.toLowerCase();
    let industry = '';
    let city = '';

    if (lower.includes("hotel")) industry = "hotel";
    if (lower.includes("jaipur")) city = "Jaipur";
    if (lower.includes("delhi")) city = "Delhi";
    if (lower.includes("mumbai")) city = "Mumbai";

    return { industry, city };
  }

  // Jab key aayegi tab actual GPT prompt yahan likhna
  return { industry: "default", city: "default" };
}
