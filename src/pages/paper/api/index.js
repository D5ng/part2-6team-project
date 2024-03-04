const BASE_URL = process.env.REACT_APP_API_KEY;

const TEAM = '4-6';

export const getRollingPaper = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/`;


export const getreactions = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/reactions/`;

export const getRollingPaperMessage = (recipientsId) =>
  `${BASE_URL}/${TEAM}/recipients/${recipientsId}/messages/?limit=8`;
