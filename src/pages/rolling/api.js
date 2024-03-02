const BASE_URL = process.env.REACT_APP_API_KEY;

async function fetchData(base, endpoint) {
  const url = `${base}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return response.json();
}

function getRecipients() {
  return fetchData(BASE_URL, '/4-6/recipients/');
}

export default getRecipients;
