import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/ProfileImgList.style';
import { useMessageFormContext } from '../context/MessageFormContext';

function ProfileImgList({ openModal }) {
  const { profileImgSrc, setCurrentProfileImg } = useMessageFormContext();
  const profileImgList = profileImgSrc.slice(1);
  const handleProfileImgClick = (url) => {
    setCurrentProfileImg(url);
  };
  return (
    <S.ProfileImgList>
      {profileImgList.map((url) => (
        <S.ListItem key={url}>
          <S.ProfileImg
            src={url}
            alt="프로필 이미지"
            onClick={() => {
              handleProfileImgClick(url);
            }}
          />
        </S.ListItem>
      ))}
      <S.ListItem>
        <S.SearchBtb onClick={() => openModal()} type="button">
          <S.SearchImg src="/images/icons/searchIcon.svg" alt="프로필 이미지 검색" />
        </S.SearchBtb>
      </S.ListItem>
    </S.ProfileImgList>
  );
}

export default ProfileImgList;
