export async function fetchApi() {
  const response = await fetch('https://rolling-api.vercel.app/4-6/recipients/2872/');
  if (!response.ok) {
    throw new Error('error');
  }
  const body = await response.json();
  return body;
}

export async function createReactions(formData) {
  const response = await fetch('https://rolling-api.vercel.app/4-6/recipients/2872/reactions/', {
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
