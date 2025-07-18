import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "j5dg682b",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return "";
  if (!source.asset) return "";
  
  try {
    return builder.image(source);
  } catch (error) {
    console.error('urlFor error:', error);
    // Return direct asset URL as fallback
    return source.asset.url || "";
  }
}
