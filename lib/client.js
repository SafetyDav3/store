import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "ux4eqs6a",
  dataset: "production",
  apiVersion: "2023-01-20",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
