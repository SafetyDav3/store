import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = SanityClient({
  projectID: "ux4eqs6a",
  dataset: "production",
  apiVersion: "1-20-2023",
  useCdn: true,
  token: "process.env.SANITY_TOKEN",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
