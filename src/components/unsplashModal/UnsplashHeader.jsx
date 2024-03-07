import React from 'react';
import * as S from './UnsplashHeader.style';

function UnsplashHeader({ onCloseModal }) {
  return (
    <S.Header>
      <S.Logo to="/">
        <S.UnsplashIcon src="/images/form/unsplash_icon.png" alt="" />
        Unsplash
      </S.Logo>
      <S.CloseButton onClick={onCloseModal}>
        <img src="/images/icons/close.svg" alt="이미지 모달창 닫기" />
      </S.CloseButton>
    </S.Header>
  );
}

export default UnsplashHeader;
