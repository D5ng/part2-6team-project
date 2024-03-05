export const BASE_API_URL = 'https://rolling-api.vercel.app';

export const TEAM = '4-6';

export default async function createReactions(recipientsId, formData) {
  const response = await fetch(`${BASE_API_URL}/${TEAM}/recipients/${recipientsId}/reactions/`, {
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
