const BASE_URL_PATH = 'https://rolling-api.vercel.app/';
const UNSPLASH_API_KEY = `fgJWmCOHIRKbOxi82y6luVa0aW2nLT2SQkbknuDJ2vQ`;
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

export async function getUnsplashProfileImg() {
  try {
    const request = await fetch(`https://api.unsplash.com/photos/random?count=15&client_id=${UNSPLASH_API_KEY}`);
    const data = await request.json();

    return data.map((v) => v.urls.small);
  } catch (error) {
    console.log(error);
  }
}
