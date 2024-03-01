const BASE_URL_PATH = 'https://rolling-api.vercel.app/';

async function RequestAPI(base, endpoint) {
  const requestURL = `${base}${endpoint}`;
  try {
    const responseData = await fetch(requestURL);
    const resultData = responseData.json();
    if (!responseData.ok) {
      throw new Error('서버 응답이 올바르지 않습니다');
    }
    return resultData;
  } catch (e) {
    console.log(e);
  }
}

export function requsetProfileImgData() {
  return RequestAPI(BASE_URL_PATH, 'profile-images/');
}

// eslint-disable-next-line consistent-return
export async function postCreateMessageData(id, messageInformation) {
  try {
    const postAPI = await fetch(`${BASE_URL_PATH}4-6/recipients/${id}/messages/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageInformation),
    });
    return postAPI;
  } catch (e) {
    console.log(e);
  }
}
