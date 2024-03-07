/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import Input from '@Components/form/Input';
import useAsync from 'hooks/useAsync';
import * as S from '@Form/components/ImagePickerModal.style';

import { CheckIcon } from '@Form/components/BackgroundOptions.style';
import { fetchUnsplashPopularImage, fetchUnsplashSearchImage } from 'service/unplash';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import { ImagePickerModalProvider, useImagePickerModalContext } from './UnsplashModalContext';

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
  const [isPopularLoading, fetchingError, onFetchImagesAsync] = useAsync(fetchUnsplashPopularImage);
  const [isSearchLoading, searchingError, onSearchImagesAsync] = useAsync(fetchUnsplashSearchImage);
  const [keyword, setKeyword] = useState('');

  const handleChangeKeyword = (event) => setKeyword(event.target.value);

  const modalContentRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    handleLoadSearchedImages(onSearchImagesAsync, 1, keyword);
  };

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    if (isPopularLoading) return;
    setPage(page + 1);
  };

  const ref = useIntersectionObserver(onIntersect, { threshold: 0.3 });

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
          <Input onChange={handleChangeKeyword}>어떤 배경화면을 원하시나요?</Input>
          <S.SearchButton type="submit" onClick={handleSearch}>
            검색
          </S.SearchButton>
        </S.SearchBar>
      </S.Header>
      <S.ImageLists ref={modalContentRef}>
        {(keyword === '' ? unsplashBackgroundImages : searchedImages)?.map((image) => (
          <S.ImageList key={image.id} $isSelected={selectedImages === image.urls.regular}>
            <S.Image
              src={image.urls.small}
              $aspectRatio={`${image.width} / ${image.height}`}
              onClick={() => handleBackgroundClick(image.urls.regular)}
              alt="unsplash image"
            />
          </S.ImageList>
        ))}
      </S.ImageLists>
    </S.ImagePickerModal>
  );
}

export default ImagePickerModal;
