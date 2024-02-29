const BASE_URL = process.env.REACT_APP_API_KEY;
const UNSPLASH_URL = process.env.REACT_APP_UNSPLASH_API;

async function fetchData(base, endpoint) {
  const url = `${base}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return response.json();
}

export function getRandomBackgroundImages() {
  return fetchData(UNSPLASH_URL, '');
}

export function getBackgroundImages() {
  return fetchData(BASE_URL, '/background-images/');
}

export function getProfileImages() {
  return fetchData(BASE_URL, '/profile-images/');
}

export async function createPaper(paperData) {
  const response = await fetch(`${BASE_URL}/4-6/recipients/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paperData),
  });
  if (!response.ok) {
    throw new Error('Failed to create papaer');
  }
  return response.json();
}
