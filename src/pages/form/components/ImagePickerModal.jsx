/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef, useState } from 'react';
import Input from '@Components/form/Input';
import { useFormContext } from '../context/FormContext';
import * as S from './ImagePickerMoadl.style';
import { getUnsplashBackgroundImages, getUnsplashSearchedImages } from '../api';
import useAsync from '../hooks/useAsync';
import { CheckIcon } from './BackgroundOptions.style';

function ImagePickerModal({ closeModal }) {
  const { selectedBackground, setSelectedBackground, unsplashBackgroundImages, setUnsplashBackgroundImages } =
    useFormContext();
  const [page, setPage] = useState(1);
  const [isFetchingImages, fetchingError, onFetchImagesAsync] = useAsync(getUnsplashBackgroundImages);
  const [isSearchImages, searchingError, onSearchImagesAsync] = useAsync(getUnsplashSearchedImages);
  const [keyword, setKeyword] = useState('');
  const [searchedImages, setSearchedImages] = useState([]);
  const modalContentRef = useRef(null);

  async function handleLoadUnsplashImages(pageNum) {
    const data = await onFetchImagesAsync(pageNum);
    if (!data) return;
    if (pageNum === 1) {
      setUnsplashBackgroundImages(data);
    } else {
      setUnsplashBackgroundImages((prevImages) => [...prevImages, ...data]);
    }
  }

  async function handleLoadSearchedImages(pageNum, key) {
    const data = await onSearchImagesAsync(pageNum, key);
    if (!data) return;
    if (pageNum === 1) {
      setSearchedImages(data.results);
    } else {
      setSearchedImages((prevImages) => [...prevImages, ...data.results]);
    }
  }

  const handleBackgroundOptionClick = (option) => {
    setSelectedBackground(option);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    handleLoadSearchedImages(1, keyword);
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
    handleLoadUnsplashImages(page);
    handleLoadSearchedImages(page, keyword);
  }, [page]);

  return (
    <S.ImagePickerModal>
      <S.Header>
        <S.CloseButton src="/images/icons/close.svg" onClick={closeModal} />

        <S.ModalTitle>배경화면을 선택해 주세요</S.ModalTitle>

        <S.SearchBar>
          <Input
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          >
            배경화면을 검색하세요
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
                onClick={() => handleBackgroundOptionClick(list.urls.full)}
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
