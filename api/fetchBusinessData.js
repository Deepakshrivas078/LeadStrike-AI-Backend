// api/fetchBusinessData.js

export default async function fetchBusinessData({ industry, city }) {
  // Jab real API key milegi, yahan API call karega
  if (!process.env.BUSINESS_API_KEY) {
    console.warn("BUSINESS_API_KEY missing. Returning dummy data.");

    return [
      {
        name: `${industry} King`,
        city,
        email: `contact@${industry}king.com`,
        phone: "+91-9999999999",
        website: `https://${industry}king.com`,
        linkedin: "https://linkedin.com/company/example",
      },
    ];
  }

  // Future: API call and real data yahan aayega
  return [];
}
