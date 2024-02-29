import React, { useEffect } from 'react';
import * as S from 'pages/form/components/BackgroundOptions.style';
import { useFormContext } from '../context/FormContext';

const COLOR_LIST = [
  { title: 'beige', color: 'var(--orange200)' },
  { title: 'purple', color: 'var(--primary200)' },
  { title: 'blue', color: 'var(--blue200)' },
  { title: 'green', color: 'var(--green200)' },
];

function BackgroundOptions() {
  const { selectedBtn, selectedBackground, setSelectedBackground, backgroundImages, randomBackgroundImages } =
    useFormContext();

  const handleBackgroundOptionClick = (option) => {
    setSelectedBackground(option);
  };

  useEffect(() => {
    if (selectedBtn === 'color') {
      setSelectedBackground(COLOR_LIST[0].title);
    } else if (selectedBtn === 'image') {
      setSelectedBackground(backgroundImages[0]);
    }
  }, [selectedBtn]);
  return (
    <S.BackgroundOptions>
      {selectedBtn === 'color'
        ? COLOR_LIST.map((list) => (
            <S.OptionList key={list.title} color={list.color} onClick={() => handleBackgroundOptionClick(list.title)}>
              {selectedBackground === list.title && <S.CheckIcon src="images/icons/check.svg" alt="" />}
            </S.OptionList>
          ))
        : backgroundImages.slice(0, 3).map((list) => (
            <S.OptionList key={list} url={list} onClick={() => handleBackgroundOptionClick(list)}>
              {selectedBackground === list && <S.CheckIcon src="images/icons/check.svg" alt="" />}
            </S.OptionList>
          ))}
      {selectedBtn === 'image' && (
        <S.OptionList
          key={randomBackgroundImages}
          url={randomBackgroundImages}
          onClick={() => handleBackgroundOptionClick(randomBackgroundImages)}
        >
          {selectedBackground === randomBackgroundImages && <S.CheckIcon src="images/icons/check.svg" alt="" />}
        </S.OptionList>
      )}
    </S.BackgroundOptions>
  );
}

export default BackgroundOptions;
