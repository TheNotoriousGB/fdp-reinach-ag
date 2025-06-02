import { client } from "../sanityClient";

export async function getEvents() {
  const query = `*[_type == "event"] | order(date asc, startTime asc){
    _id,
    title,
    date,
    startTime,
    endTime,
    link
  }`;

  const data = await client.fetch(query);
  return data || [];
}
