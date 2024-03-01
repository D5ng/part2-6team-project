async function fetchapi() {
  const response = await fetch('https://rolling-api.vercel.app/4-6/recipients/2872/reactions/');
  if (!response.ok) {
    throw new Error('error');
  }
  const body = await response.json();
  return body;
}
export default fetchapi;
