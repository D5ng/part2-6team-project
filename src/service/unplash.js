import { IMAGES_URL, UNSPLASH_TOKEN } from 'config';
import { sendRequest } from 'utils/request-util';

export const GET_POPULAR_IMAGE = (pageNumber) =>
  `${IMAGES_URL}/photos?page=${pageNumber}&per_page=10&order_by=popular&${UNSPLASH_TOKEN}`;

export const GET_SEARCH_IMAGE = (pageNumber, searchValue) =>
  `${IMAGES_URL}/search/photos?page=${pageNumber}&per_page=10&query=${searchValue}&order_by=popular&${UNSPLASH_TOKEN}`;

export const GET_RANDOM_IMAGE = (num = 3) => `${IMAGES_URL}/photos/random?count=${num}&${UNSPLASH_TOKEN}`;

export const fetchUnsplashPopularImage = async (pageNumber) => {
  const result = await sendRequest({ url: GET_POPULAR_IMAGE(pageNumber) });
  return result;
};

export const fetchUnsplashSearchImage = async (pageNumber, searchValue) => {
  const result = await sendRequest({ url: GET_SEARCH_IMAGE(pageNumber, searchValue) });
  return result.results;
};

export const fetchUnsplashRandomImage = async (num = 3) => {
  const result = await sendRequest({ url: GET_RANDOM_IMAGE(num) });
  return result;
};
