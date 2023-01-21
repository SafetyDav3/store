import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "ux4eqs6a",
  dataset: "production",
  apiVersion: "2023-01-20",
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
