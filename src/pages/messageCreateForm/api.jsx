const BASE_URL_PATH = 'https://rolling-api.vercel.app/';

const ERROR_STATUS_CODE_MESSAGE = {
  404: '해당 페이지, 유저를 찾을 수 없습니다.',
  500: '서버에 문제가 발생했습니다. 잠시후 다시 시도해주세요.',
};

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

export function createMessage(id, messageInformation) {
  const postAPI = fetch(`${BASE_URL_PATH}4-6/recipients/${id}/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(messageInformation),
  });
  return postAPI;
}

export function errorHandling(boolean, status, callback) {
  if (boolean) {
    callback();
  } else {
    throw new Error(`${ERROR_STATUS_CODE_MESSAGE[status]} 오류코드 ${status}`);
  }
}
