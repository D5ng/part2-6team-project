import React from 'react';
import * as S from './MoreProfileImgBtn.style';
import { useMessageFormContext } from '../context/MessageFormContext';

function MoreProfileImgBtn() {
  const { setToggleModal } = useMessageFormContext();
  return (
    <S.SearchBtb onClick={() => setToggleModal(true)} type="button">
      <S.SearchImg src="/images/icons/searchIcon.svg" alt="프로필 이미지 검색" />
    </S.SearchBtb>
  );
}

export default MoreProfileImgBtn;
