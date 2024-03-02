import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getBackgroundImages } from '../api';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [backgroundImages, setBackgroundImages] = useState({});
  const [randomBackgroundImages, setRandomBackgroundImages] = useState({});
  const [unsplashBackgroundImages, setUnsplashBackgroundImages] = useState([]);

  // 배경 이미지 로드 함수
  const handleLoadImages = async () => {
    const result = await getBackgroundImages();
    if (!result) return;
    const images = result.imageUrls;
    setBackgroundImages(images);
  };

  useEffect(() => {
    handleLoadImages();
  }, []);

  // 값 객체
  const values = useMemo(
    () => ({
      selectedBtn,
      setSelectedBtn,

      selectedBackground,
      setSelectedBackground,

      backgroundImages,
      randomBackgroundImages,
      unsplashBackgroundImages,
      setUnsplashBackgroundImages,
    }),

    [
      selectedBtn,
      setSelectedBtn,

      selectedBackground,
      setSelectedBackground,

      backgroundImages,
      randomBackgroundImages,
      unsplashBackgroundImages,
      setUnsplashBackgroundImages,
    ],
  );

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
