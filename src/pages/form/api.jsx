const BASE_URL = 'https://rolling-api.vercel.app';
const UNSPLASH_URL = 'https://api.unsplash.com/photos/random/?client_id=4VOX7zuvmoNb-YCxoDwmF6pxa2RadzXZQ7vwpO68fRM';
// const TEAM = '4-6';

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
