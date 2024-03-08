import React, { createContext, useContext, useEffect, useState } from 'react';
import { GET_RANDOM_IMAGE } from 'service/unplash';
import { getAllPapersInfo } from '../api';
import useDefaultBackgroundImage from '../hooks/useDefaultBackgroundImage';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export function FormProvider({ children }) {
  const [papersInfo, setPapersInfo] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState('color');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [searchedImages, setSearchedImages] = useState([]);

  const { state: unsplashImageState, fetchRequest: unsplashFetchRequest } = useDefaultBackgroundImage();

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

  const handleToggleButtonClick = (buttonType) => {
    setSelectedBtn(buttonType);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const values = {
    unsplashImageState,
    papersInfo,
    handleLoadPapersInfo,
    selectedBtn,
    handleToggleButtonClick,
    selectedBackground,
    searchedImages,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
}
