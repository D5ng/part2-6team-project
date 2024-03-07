const IMAGES_URL = process.env.REACT_APP_UNSPLASH_IMAGES_API;
const UNSPLASH_TOKEN = process.env.REACT_APP_UNSPLASH_TOKEN;

async function fetchData(base, endpoint, token) {
  const isToken = token ? '?' : '';
  const url = `${base}${endpoint}${isToken}${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return response.json();
}

export function getUnsplashBackgroundImages(num = 1) {
  return fetchData(IMAGES_URL, `/photos`, `page=${num}&per_page=10&order_by=popular&${UNSPLASH_TOKEN}`);
}

export function getUnsplashSearchedImages(num = 1, key = '') {
  return fetchData(
    IMAGES_URL,
    `/search/photos`,
    `page=${num}&per_page=10&query=${key}&order_by=popular&${UNSPLASH_TOKEN}`,
  );
}
