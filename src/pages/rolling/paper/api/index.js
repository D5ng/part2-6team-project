const BASE_URL = process.env.REACT_APP_API_KEY;

const TEAM = '4-6';

export const getRollingPaper = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/`;

export const getRollingPaperMessage = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/messages/`;

export const getreactions = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/reactions/`;

export const postreactions = async (recipientsId, data) => {
  const url = `${BASE_URL}/${TEAM}/recipients/${recipientsId}/reactions/`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('POST request failed');
    }

    return response.json();
  } catch (error) {
    console.error('Error sending POST request:', error);
    throw error;
  }
};
