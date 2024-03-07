import { BASE_URL, TEAM } from 'config';
import { sendRequest, POST_OPTION } from 'utils/request-util';

// const BASE_URL = process.env.REACT_APP_API_KEY;
// const IMAGES_URL = process.env.REACT_APP_UNSPLASH_IMAGES_API;
// const UNSPLASH_TOKEN = process.env.REACT_APP_UNSPLASH_TOKEN;

export const CREATE_PAPER_API = `${BASE_URL}/${TEAM}/recipients/`;

export const createPaper = async (paperData) => {
  const result = await sendRequest(CREATE_PAPER_API, POST_OPTION);
  return result;
};

// async function fetchData(base, endpoint, token) {
//   const isToken = token ? '?' : '';
//   const url = `${base}${endpoint}${isToken}${token}`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
//   }
//   return response.json();
// }

// export async function createPaper(paperData) {
//   const response = await fetch(`${BASE_URL}/4-6/recipients/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(paperData),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to create papaer');
//   }
//   return response.json();
// }

// export function getAllPapersInfo() {
//   return fetchData(BASE_URL, '/4-6/recipients/?limit=1000', '');
// }
