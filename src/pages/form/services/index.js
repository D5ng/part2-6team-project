import { BASE_URL, TEAM } from 'config';
import { sendRequest, POST_OPTION } from 'utils/request-util';

export const CREATE_PAPER_API = `${BASE_URL}/${TEAM}/recipients/`;

export const createPaper = async (paperData) => {
  const result = await sendRequest({ url: CREATE_PAPER_API, options: POST_OPTION(paperData) });
  console.log(result);
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
