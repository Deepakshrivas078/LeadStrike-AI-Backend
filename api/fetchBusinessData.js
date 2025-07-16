// fetchBusinessData.js
export default async function fetchBusinessData({ industry, city }) {
  // 🔧 Future: Actual API fetch (e.g., Apollo.io, Google Maps, etc.)

  if (!process.env.BUSINESS_API_KEY) {
    console.warn("BUSINESS_API_KEY missing. Returning empty array.");
    return []; // 👈 abhi ke liye khaali
  }

  // Baad me yahan real API call aayegi
  return [
    // fetched data yahan
  ];
}
