const config = {
  unsplash: {
    apiUrl: process.env.UNSPLASH_API_URL || "https://api.unsplash.com",
    accessKey: process.env.UNSPLASH_ACCESS_KEY || "",
    secretKey: process.env.UNSPLASH_SECRET_KEY || "",
  },
};

export default config;
