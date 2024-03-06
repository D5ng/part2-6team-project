import React, { useEffect, useState } from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/ProfileImgList.style';
import { useMessageFormContext } from '../context/MessageFormContext';
import { requsetProfileImgData } from '../api';

function ProfileImgList({ openModal }) {
  const [profileImgSrc, setProfileImgSrc] = useState([]);
  const { setCurrentProfileImg } = useMessageFormContext();
  const handleProfileImgClick = (url) => {
    setCurrentProfileImg(url);
  };

  useEffect(() => {
    const getProfileImgData = async () => {
      const response = await requsetProfileImgData();
      setProfileImgSrc([...response.imageUrls]);
    };
    getProfileImgData();
  }, []);
  useEffect(() => {
    setCurrentProfileImg(profileImgSrc[0]);
  }, [profileImgSrc]);
  return (
    <S.ProfileImgList>
      {profileImgSrc.slice(1).map((url) => (
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
