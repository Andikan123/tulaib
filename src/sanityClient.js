import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yjxfyz8p", // Your Sanity project ID
  dataset: "production", // Your dataset name (usually "production")
  useCdn: false, // Use CDN for faster reads (set to false for fresh data)
  apiVersion: "2025-03-18", // The version of the Sanity API you're using
  token:
    "sk4we2nOOLtu6sTrci298swgNtm7OihBJyvV3PCnhdj3UnOuqdMaEZvHyOD1YmUpiLs44ROSGuar5fu1aLDilQ1RhpAhbXJWRPchsn2gpjZZusZh0txACmHfLMJiloww4Cf0PSR9CM5QAKYbV2auq215pt04HWJJGAqVv90K0OEkxdt6s9ID", // Add the token here
});

console.log("Sanity Client Initialized:", client); // Log to confirm the client is initialized https://meet.google.com/qhb-meaz-gve

export default client;
