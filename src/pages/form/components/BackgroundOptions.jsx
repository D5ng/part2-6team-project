import React, { useEffect } from 'react';
import * as S from 'pages/form/components/BackgroundOptions.style';
import { useFormContext } from '../context/FormContext';

const COLOR_LIST = [
  { title: 'beige', color: 'var(--orange200)' },
  { title: 'purple', color: 'var(--primary200)' },
  { title: 'blue', color: 'var(--blue200)' },
  { title: 'green', color: 'var(--green200)' },
];

function BackgroundOptions({ openModal }) {
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
            <S.BackgroundOption key={list.title}>
              <S.ColorList color={list.color} onClick={() => handleBackgroundOptionClick(list.title)} />
              {selectedBackground === list.title && <S.CheckIcon src="images/icons/check.svg" alt="배경 체크 아이콘" />}
            </S.BackgroundOption>
          ))
        : backgroundImages.slice(0, 3).map((list) => (
            <S.BackgroundOption key={list}>
              <S.ImageList $url={list} onClick={() => handleBackgroundOptionClick(list)} />
              {selectedBackground === list && <S.CheckIcon src="images/icons/check.svg" alt="배경 체크 아이콘" />}
            </S.BackgroundOption>
          ))}
      {selectedBtn === 'image' && (
        <S.ColorList
          onClick={() => {
            openModal();
          }}
          $isModal
        >
          <S.SearchIcon src="/images/icons/image-search.svg" alt="배경사진 탐색 아이콘" />
        </S.ColorList>
      )}
    </S.BackgroundOptions>
  );
}

export default BackgroundOptions;
