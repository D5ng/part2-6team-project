import React, { createContext, useContext, useState } from 'react';
// import { getAllPapersInfo, getBackgroundImages } from '../../pages/imagePickerApi';

const UnsplashModalContext = createContext();

export const useUnsplashModalContext = () => useContext(UnsplashModalContext);

export function UnsplashModalContextProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState('');

  const [backgroundImages, setBackgroundImages] = useState([]);

  const [unsplashBackgroundImages, setUnsplashBackgroundImages] = useState([]);
  const [searchedImages, setSearchedImages] = useState([]);

  // unsplash 배경 이미지 로드 함수
  const handleLoadUnsplashImages = async (asyncFunction, pageNum) => {
    const data = await asyncFunction(pageNum);
    if (!data) return;

    if (pageNum === 1) {
      setUnsplashBackgroundImages(data);
    } else {
      setUnsplashBackgroundImages((prevImages) => [...prevImages, ...data]);
    }
  };

  // unsplash 검색된 배경 이미지 로드 함수
  const handleLoadSearchedImages = async (asyncFunction, pageNum, key) => {
    const data = await asyncFunction(pageNum, key);
    if (!data) return;
    if (pageNum === 1) {
      setSearchedImages(data);
    } else {
      setSearchedImages((prevImages) => [...prevImages, ...data]);
    }
  };

  const handleBackgroundClick = (image) => {
    setSelectedItem(image);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    selectedItem,
    handleBackgroundClick,

    backgroundImages,

    unsplashBackgroundImages,
    handleLoadUnsplashImages,

    searchedImages,
    handleLoadSearchedImages,
  };

  return <UnsplashModalContext.Provider value={values}>{children}</UnsplashModalContext.Provider>;
}
