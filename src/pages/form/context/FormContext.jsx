import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getBackgroundImages } from '../api';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [unsplashBackgroundImages, setUnsplashBackgroundImages] = useState([]);

  // 배경 이미지 로드 함수
  const handleLoadImages = async () => {
    const result = await getBackgroundImages();
    if (!result) return;
    const images = result.imageUrls;
    setBackgroundImages(images);
  };

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

  const handleToggleButtonClick = (buttonType) => {
    setSelectedBtn(buttonType);
  };

  const handleBackgroundClick = (background) => {
    setSelectedBackground(background);
  };

  useEffect(() => {
    handleLoadImages();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    selectedBtn,
    handleToggleButtonClick,

    selectedBackground,
    handleBackgroundClick,

    backgroundImages,
    unsplashBackgroundImages,
    handleLoadUnsplashImages,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
