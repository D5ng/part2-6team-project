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
      throw new Error('Fetch failed...');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return { result: false, message: error.message };
  }
}

export { POST_OPTION, sendRequest };
