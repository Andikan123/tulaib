import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "mtqj8g3m", // Your Sanity project ID
  dataset: "production", // Your dataset name (usually "production")
  useCdn: false, // Use CDN for faster reads (set to false for fresh data)
  apiVersion: "2025-03-18", // The version of the Sanity API you're using
});

console.log("Sanity Client Initialized:", client); // Log to confirm the client is initialized https://meet.google.com/qhb-meaz-gve

export default client;
