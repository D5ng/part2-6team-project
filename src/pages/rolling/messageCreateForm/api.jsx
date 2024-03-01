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

function requsetProfileImgData() {
  return RequestAPI(BASE_URL_PATH, 'profile-images/');
}

export default requsetProfileImgData;
