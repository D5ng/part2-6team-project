/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import useAsync from 'hooks/useAsync';
import * as S from '@Components/unsplashModal/UnsplashModal.style';

import UnsplashHeader from '@Components/unsplashModal/UnsplashHeader';
import UnsplashCategory from '@Components/unsplashModal/UnsplashCategory';
import UnsplashMasonry from '@Components/unsplashModal/UnsplashMasonry';
import { fetchUnsplashPopularImage, fetchUnsplashSearchImage } from 'service/unplash';
import { useUnsplashModalContext } from './UnsplashModalContext';

function UnsplashModal({ onCloseModal }) {
  const {
    selectedItem,
    handleBackgroundClick,
    unsplashBackgroundImages,
    handleLoadUnsplashImages,
    searchedImages,
    handleLoadSearchedImages,
  } = useUnsplashModalContext();

  const [isPopularLoading, fetchingError, onFetchImagesAsync] = useAsync(fetchUnsplashPopularImage);
  const [isSearchLoading, searchingError, onSearchImagesAsync] = useAsync(fetchUnsplashSearchImage);
  const [page, setPage] = useState(1);
  const [searchPage, setSearchPage] = useState(1);

  const searchRef = useRef();
  const ImageListRef = useRef();

  const isSearch = searchRef.current?.value.trim().length !== 0;
  const isLoading = isSearchLoading || isPopularLoading;

  const handleIncreasePage = () => setPage(page + 1);
  const handleSearchIncreasePage = () => setSearchPage(searchPage + 1);

  const handleSearch = (e) => {
    e.preventDefault();
    ImageListRef.current.scrollTop = 0;
    handleLoadSearchedImages({
      asyncFunction: onSearchImagesAsync,
      page: 1,
      searchValue: searchRef?.current?.value,
    });
  };

  const handleCategory = (value) => {
    setSearchPage(1);
    searchRef.current.value = value;
    ImageListRef.current.scrollTop = 0;

    handleLoadSearchedImages({
      asyncFunction: onSearchImagesAsync,
      page: 1,
      searchValue: searchRef.current.value,
    });
  };

  useEffect(() => {
    if (!isPopularLoading) handleLoadUnsplashImages(onFetchImagesAsync, page);
  }, [page]);

  useEffect(() => {
    if (!isSearchLoading)
      handleLoadSearchedImages({
        asyncFunction: onSearchImagesAsync,
        page: searchPage,
        searchValue: searchRef.current.value,
      });
  }, [searchPage]);

  return (
    <S.UnsplashModal onSubmit={handleSearch}>
      <UnsplashHeader onCloseModal={onCloseModal} />
      <S.Body>
        <S.SearchBar>
          <S.Input ref={searchRef} placeholder="어떤 배경화면을 원하시나요?" />
          <S.SearchButton type="submit">검색</S.SearchButton>
        </S.SearchBar>

        <UnsplashCategory onCategory={handleCategory} />
        <UnsplashMasonry
          ref={ImageListRef}
          onSearchIncreasePage={handleSearchIncreasePage}
          onIncreasePage={handleIncreasePage}
          isLoading={isLoading}
          imageList={isSearch ? searchedImages : unsplashBackgroundImages}
          isSearch={isSearch}
        />
      </S.Body>
    </S.UnsplashModal>
  );
}

export default UnsplashModal;
