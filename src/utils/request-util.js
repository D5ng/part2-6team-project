const POST_OPTION = (data) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
});

async function sendRequest({ url, options }) {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('Unsplash API 호출 횟수를 초과했어요 😂');
      }

      throw new Error(response);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return { result: false, message: error.message };
  }
}

export { POST_OPTION, sendRequest };
