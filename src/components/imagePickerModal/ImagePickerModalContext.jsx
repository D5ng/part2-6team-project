import React, { createContext, useContext, useState } from 'react';
// import { getAllPapersInfo, getBackgroundImages } from '../../pages/imagePickerApi';

const ImagePickerModalContext = createContext();

export const useImagePickerModalContext = () => useContext(ImagePickerModalContext);

export function ImagePickerModalProvider({ children }) {
  const [selectedImages, setSelectedImages] = useState('');

  const [backgroundImages, setBackgroundImages] = useState([]);
  const [profileImages, setProfileImages] = useState([]);

  const [unsplashBackgroundImages, setUnsplashBackgroundImages] = useState([]);
  const [searchedImages, setSearchedImages] = useState([]);

  // unsplash 배경 이미지 로드 함수
  const handleLoadUnsplashImages = async (asyncFunction, pageNum) => {
    const data = await asyncFunction(pageNum);
    if (!data) {
      return;
    }
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
      setSearchedImages(data.results);
    } else {
      setSearchedImages((prevImages) => [...prevImages, ...data.results]);
    }
  };

  const handleBackgroundClick = (image) => {
    setSelectedImages(image);
  };

  const handleProfileClick = (image) => {
    setSelectedImages(image);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    selectedImages,
    handleBackgroundClick,

    backgroundImages,

    unsplashBackgroundImages,
    handleLoadUnsplashImages,

    searchedImages,
    handleLoadSearchedImages,
  };

  return <ImagePickerModalContext.Provider value={values}>{children}</ImagePickerModalContext.Provider>;
}
