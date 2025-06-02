import { client } from "../sanityClient";

export async function getGalleryImages() {
  const query = `*[_type == "gallery"][0]{
    images[]{
      asset->{
        _id,
        url
      }
    }
  }`;

  const data = await client.fetch(query);
  return data?.images || [];
}
