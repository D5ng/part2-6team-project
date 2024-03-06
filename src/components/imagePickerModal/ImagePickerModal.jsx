/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import Input from '@Components/form/Input';
import useAsync from 'hooks/useAsync';
import * as S from '@Form/components/ImagePickerModal.style';
import { getUnsplashBackgroundImages, getUnsplashSearchedImages } from '@Components/imagePickerModal/api';

import { CheckIcon } from '@Form/components/BackgroundOptions.style';
import { ImagePickerModalProvider, useImagePickerModalContext } from './ImagePickerModalContext';

function ImagePickerModal({ closeModal }) {
  const {
    selectedImages,
    handleBackgroundClick,
    unsplashBackgroundImages,
    handleLoadUnsplashImages,
    searchedImages,
    handleLoadSearchedImages,
  } = useImagePickerModalContext();

  const [page, setPage] = useState(1);
  const [isFetchingImages, fetchingError, onFetchImagesAsync] = useAsync(getUnsplashBackgroundImages);
  const [isSearchImages, searchingError, onSearchImagesAsync] = useAsync(getUnsplashSearchedImages);
  const [keyword, setKeyword] = useState('');

  const modalContentRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    handleLoadSearchedImages(onSearchImagesAsync, 1, keyword);
  };

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
    handleLoadSearchedImages(onSearchImagesAsync, page, keyword);
  }, [page]);


  return (
    <S.ImagePickerModal>
      <S.Header>
        <S.CloseButton src="/images/icons/close.svg" onClick={closeModal} />
        <S.ModalTitle>
          <S.UnsplashIcon src="/images/form/unsplash_icon.png" alt="" />
          배경화면을 선택해 주세요
        </S.ModalTitle>

        <S.SearchBar>
          <Input
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          >
            어떤 배경화면을 원하시나요?
          </Input>
          <S.SearchButton type="submit" onClick={handleSearch}>
            검색
          </S.SearchButton>
        </S.SearchBar>
      </S.Header>
      {fetchingError && searchingError ? (
        <div>NO IMAGES</div>
      ) : (
        <S.ImageLists ref={modalContentRef}>
          {(keyword === '' ? unsplashBackgroundImages : searchedImages)?.map((list) => (
            <S.ImageList key={list.id}>
              <S.Image
                src={list.urls.regular}
                onClick={() => handleBackgroundClick(list.urls.full)}
                alt="unsplash image"
              />
              {selectedImages === list.urls.full && (
                <CheckIcon src="/images/icons/check.svg" alt="배경사진 탐색 아이콘" />
              )}
            </S.ImageList>
          ))}
        </S.ImageLists>
      )}
    </S.ImagePickerModal>
  );
}

export default ImagePickerModal;