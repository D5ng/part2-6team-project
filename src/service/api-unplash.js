import { IMAGES_URL, TEAM, UNSPLASH_TOKEN } from 'config';
import fetchRequest from 'utils/fetchRequest';

export const GET_POPULAR_IMAGE = (pageNumber) =>
  `${IMAGES_URL}/photos?page=${pageNumber}&per_page=10&order_by=popular&${UNSPLASH_TOKEN}`;

export const GET_SEARCH_IMAGE = (pageNumber, searchValue) =>
  `${IMAGES_URL}/search/photospage=${pageNumber}&per_page=10&query=${searchValue}&order_by=popular&${UNSPLASH_TOKEN}`;

export const fetchUnsplashPopularImage = async (pageNumber) => {
  const result = await fetchRequest({ url: GET_POPULAR_IMAGE(pageNumber) });
  return result;
};

export const fetchUnsplashSearchImage = async (pageNumber, searchValue) => {
  const result = await fetchRequest({ url: GET_POPULAR_IMAGE(pageNumber, searchValue) });
  return result;
};
