import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getBackgroundImages, getRandomBackgroundImages } from '../api';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('beige');
  const [backgroundImages, setBackgroundImages] = useState({});
  const [randomBackgroundImages, setRandomBackgroundImages] = useState({});

  // 배경 이미지 로드 함수
  const handleLoadImages = async () => {
    const result = await getBackgroundImages();
    if (!result) return;
    const images = result.imageUrls;
    setBackgroundImages(images);
  };

  // 랜덤 배경 이미지 로드 함수
  const handleLoadRandomImages = async () => {
    const result = await getRandomBackgroundImages();
    if (!result) return;
    const image = result.urls.full;
    setRandomBackgroundImages(image);
  };

  useEffect(() => {
    handleLoadImages();
    handleLoadRandomImages();
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
    }),

    [selectedBtn, setSelectedBtn, selectedBackground, setSelectedBackground, backgroundImages, randomBackgroundImages],
  );

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
