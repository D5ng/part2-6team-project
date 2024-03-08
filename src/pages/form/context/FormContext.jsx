import React, { createContext, useContext, useEffect, useState } from 'react';
import { GET_RANDOM_IMAGE, fetchUnsplashRandomImage } from 'service/unplash';
import { getAllPapersInfo, getBackgroundImages } from '../api';
import useDefaultBackgroundImage from '../hooks/useDefaultBackgroundImage';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [papersInfo, setPapersInfo] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [searchedImages, setSearchedImages] = useState([]);

  const [backgroundImages, setBackgroundImages] = useState([]);
  const [backgroundImageError, setBackgroundImageError] = useState(null);

  const { state: unsplashImageState, fetchRequest: unsplashFetchRequest } = useDefaultBackgroundImage();

  console.log(unsplashImageState);

  useEffect(() => {
    unsplashFetchRequest({ url: GET_RANDOM_IMAGE(3) });
  }, []);

  // 전체 Paper 로드 함수(중복 확인용)
  const handleLoadPapersInfo = async () => {
    const data = await getAllPapersInfo();
    if (!data) return;
    const papers = data.results.map((paper) => paper.name);
    setPapersInfo(papers);
  };

  // 배경 이미지 로드 함수
  const handleLoadImages = async () => {
    const result = await fetchUnsplashRandomImage();
    if (!result.result) {
      setBackgroundImageError(result.message);
      return;
    }

    setBackgroundImages(result);
  };

  const handleToggleButtonClick = (buttonType) => {
    setSelectedBtn(buttonType);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    unsplashImageState,

    papersInfo,
    handleLoadPapersInfo,

    handleLoadImages,

    selectedBtn,
    handleToggleButtonClick,

    selectedBackground,

    backgroundImages,
    searchedImages,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
