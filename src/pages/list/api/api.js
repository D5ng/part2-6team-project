const BASE_URL = process.env.REACT_APP_API_KEY;

async function fetchData(base, endpoint) {
  const url = `${base}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  return response.json();
}

// 최신순 8개
export function getRecentPapers() {
  return fetchData(BASE_URL, '/4-6/recipients/?limit=8');
}

// 인기순 8개 (이모지 수 기준)
export function getPopularPapers() {
  return fetchData(BASE_URL, '/4-6/recipients/?limit=8&sort=like');
}
