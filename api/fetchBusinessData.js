// /api/fetchBusinessData.js

export async function fetchBusinessData(cleanQuery) {
  // 📌 NOTE: Replace this with real API integration (like SerpApi, Clearbit, etc.)
  // Abhi dummy data bhej raha hoon
  return [
    {
      company: "Example Biz Pvt Ltd",
      email: "contact@examplebiz.com",
      phone: "+91-1234567890",
      website: "https://examplebiz.com",
      location: cleanQuery,
    },
  ];
}

