import React, { useEffect } from 'react';
import * as S from 'pages/form/components/BackgroundOptions.style';
import { useFormContext } from '@Form/context/FormContext';
import { useUnsplashModalContext } from '@Components/unsplashModal/UnsplashModalContext';

const COLOR_LIST = [
  { title: 'beige', color: 'var(--orange200)' },
  { title: 'purple', color: 'var(--primary200)' },
  { title: 'blue', color: 'var(--blue200)' },
  { title: 'green', color: 'var(--green200)' },
];

function BackgroundOptions({ onOpenModal }) {
  const { selectedBtn, backgroundImages } = useFormContext();
  const { selectedItem, handleBackgroundClick } = useUnsplashModalContext();

  useEffect(() => {
    if (selectedBtn === 'color') {
      handleBackgroundClick(COLOR_LIST[0].title);
    } else if (selectedBtn === 'image') {
      handleBackgroundClick(backgroundImages[0].urls.regular);
    }
  }, [selectedBtn]);

  return (
    <S.BackgroundOptions>
      {selectedBtn === 'color' ? (
        COLOR_LIST.map((list) => (
          <li key={list.title}>
            <S.Button type="button" $isSelected={selectedItem === list.title}>
              <S.ColorItem color={list.color} onClick={handleBackgroundClick.bind(this, list.title)} />
            </S.Button>
          </li>
        ))
      ) : (
        <>
          {backgroundImages?.map((image) => (
            <li key={image.id}>
              <S.Button
                $isSelected={selectedItem === image.urls.regular}
                key={image.id}
                type="button"
                onClick={handleBackgroundClick.bind(this, image.urls.regular)}
              >
                <S.ImageItem src={image.urls.thumb} />
              </S.Button>
            </li>
          ))}
          <li>
            <S.Button onClick={onOpenModal} $isModal type="button">
              <S.BoxLayout>
                <S.SearchIcon src="/images/icons/image-search.svg" alt="배경사진 탐색 아이콘" />
              </S.BoxLayout>
            </S.Button>
          </li>
        </>
      )}
    </S.BackgroundOptions>
  );
}

export default BackgroundOptions;
