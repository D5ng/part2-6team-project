import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getAllPapersInfo, getBackgroundImages } from '../api';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [papersInfo, setPapersInfo] = useState([]);

  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [unsplashBackgroundImages, setUnsplashBackgroundImages] = useState([]);
  const [searchedImages, setSearchedImages] = useState([]);

  // 전체 Paper 로드 함수(중복 확인용)
  const handleLoadPapersInfo = async () => {
    const data = await getAllPapersInfo();
    if (!data) return;
    const papers = data.results.map((paper) => paper.name);
    setPapersInfo(papers);
  };

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

  const handleToggleButtonClick = (buttonType) => {
    setSelectedBtn(buttonType);
  };

  const handleBackgroundClick = (background) => {
    setSelectedBackground(background);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    papersInfo,
    handleLoadPapersInfo,

    handleLoadImages,

    selectedBtn,
    handleToggleButtonClick,

    selectedBackground,
    handleBackgroundClick,

    backgroundImages,
    unsplashBackgroundImages,
    handleLoadUnsplashImages,
    searchedImages,
    handleLoadSearchedImages,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
