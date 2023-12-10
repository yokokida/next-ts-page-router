import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "astro-template",
  apiKey: process.env.API_KEY,
});
