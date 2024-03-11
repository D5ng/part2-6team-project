import { BASE_URL, TEAM } from 'config';

export const GET_PAPER_MESSAGE = (recipientsId) => `${BASE_URL}/${TEAM}/recipients/${recipientsId}/messages/?limit=8`;

export const DELETE_PAPER_MESSAGE = (messageId) => `${BASE_URL}/${TEAM}/messages/${messageId}/`;
