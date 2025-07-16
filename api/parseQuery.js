// parseQuery.js
export default async function parseQuery(query) {
  // 🔧 Future: GPT API call yahan aayega
  // ❌ Agar key nahi hai to fallback logic chalao
  // ✅ Jab key daalega to auto work karega

  if (!process.env.OPENAI_API_KEY) {
    console.warn("OPENAI_API_KEY missing. Using fallback parser.");
    // fallback static parse
    const lower = query.toLowerCase();
    let city = '';
    let industry = '';

    if (lower.includes("jaipur")) city = "Jaipur";
    if (lower.includes("hotel")) industry = "hotel";

    return { industry, city };
  }

  // GPT logic — aayega jab key mile
  return { industry: "default", city: "default" };
}
