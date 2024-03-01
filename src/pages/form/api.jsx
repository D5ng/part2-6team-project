const BASE_URL = process.env.REACT_APP_API_KEY;
const IMAGES_URL = process.env.REACT_APP_UNSPLASH_IMAGES_API;
const UNSPLASH_TOKEN = process.env.REACT_APP_UNSPLASH_TOKEN;

async function fetchData(base, endpoint, token) {
  const url = `${base}${endpoint}?${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return response.json();
}

export function getRandomBackgroundImages() {
  return fetchData(IMAGES_URL, `/photos/random`, UNSPLASH_TOKEN);
}

export function getUnsplashBackgroundImages(num = 1) {
  return fetchData(IMAGES_URL, `/photos`, `page=${num}&per_page=6&${UNSPLASH_TOKEN}`);
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
