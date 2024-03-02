import React, { useEffect, useRef, useState } from 'react';
import { useFormContext } from '../context/FormContext';
import * as S from './ImagePickerMoadl.style';
import { getUnsplashBackgroundImages } from '../api';
import useAsync from '../hooks/useAsync';

function ImagePickerModal({ closeModal }) {
  const { unsplashBackgroundImages, setUnsplashBackgroundImages } = useFormContext();

  const [page, setPage] = useState(1);

  const [isFetchingImages, fetchingError, onFetchImagesAsync] = useAsync(getUnsplashBackgroundImages);

  const modalContentRef = useRef(null);

  async function handleLoadUnsplashImages(pageNum) {
    const data = await onFetchImagesAsync(pageNum);
    if (!data) {
      return;
    }
    if (pageNum === 1) {
      setUnsplashBackgroundImages(data);
    } else {
      setUnsplashBackgroundImages((prevImages) => [...prevImages, ...data]);
    }
  }

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
    handleLoadUnsplashImages(page);
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
            <li key={list.id}>
              <S.ImageList src={list.urls.regular} alt="unsplash image" />
            </li>
          ))}
        </S.ImageLists>
      )}
    </S.ImagePickerModal>
  );
}

export default ImagePickerModal;
