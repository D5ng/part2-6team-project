export default async function fetchRequest({ url }) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Fetch failed...');

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return error;
  }
}
