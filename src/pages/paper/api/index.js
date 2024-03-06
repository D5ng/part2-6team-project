const BASE_URL = process.env.REACT_APP_API_KEY;

const TEAM = '4-6';

export const getRollingPaper = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/`;

export const getreactions = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/reactions/`;

export const getRollingPaperMessage = (recipientsId) =>
  `${BASE_URL}/${TEAM}/recipients/${recipientsId}/messages/?limit=8`;

export default async function createReactions(recipientsId, formData) {
  const response = await fetch(`${BASE_URL}/${TEAM}/recipients/${recipientsId}/reactions/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    throw new Error('리뷰를 생성하는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}
