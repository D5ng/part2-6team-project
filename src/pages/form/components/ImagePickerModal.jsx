import React, { useEffect, useRef, useState } from 'react';
import { useFormContext } from '../context/FormContext';
import * as S from './ImagePickerMoadl.style';
import { getUnsplashBackgroundImages } from '../api';
import useAsync from '../hooks/useAsync';
import { CheckIcon } from './BackgroundOptions.style';

function ImagePickerModal({ closeModal }) {
  const { selectedBackground, handleBackgroundClick, unsplashBackgroundImages, handleLoadUnsplashImages } =
    useFormContext();
  const [page, setPage] = useState(1);
  const [isFetchingImages, fetchingError, onFetchImagesAsync] = useAsync(getUnsplashBackgroundImages);
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = modalContentRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    const currentRef = modalContentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    handleLoadUnsplashImages(onFetchImagesAsync, page);
  }, [page]);

  return (
    <S.ImagePickerModal>
      <S.Header>
        <S.ModalTitle>배경화면을 선택해 주세요</S.ModalTitle>
        <S.CloseButton type="button" onClick={closeModal}>
          x
        </S.CloseButton>
      </S.Header>
      {fetchingError ? (
        <div>NO IMAGES</div>
      ) : (
        <S.ImageLists ref={modalContentRef}>
          {unsplashBackgroundImages?.map((list) => (
            <S.ImageList key={list.id}>
              <S.Image
                src={list.urls.regular}
                onClick={() => handleBackgroundClick(list.urls.full)}
                alt="unsplash image"
              />
              {selectedBackground === list.urls.full && (
                <CheckIcon src="images/icons/check.svg" alt="배경사진 탐색 아이콘" />
              )}
            </S.ImageList>
          ))}
        </S.ImageLists>
      )}
    </S.ImagePickerModal>
  );
}

export default ImagePickerModal;
