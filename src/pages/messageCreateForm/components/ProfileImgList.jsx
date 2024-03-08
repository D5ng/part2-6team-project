import React, { useEffect, useState } from 'react';
import * as S from 'pages/messageCreateForm/components/ProfileImgList.style';

import { getRequestAPI, errorHandling } from '../api';

function ProfileImgList({ openModal, dispatch }) {
  const [profileImgSrc, setProfileImgSrc] = useState([]);

  const handleProfileImgClick = (url) => {
    dispatch({ type: 'profileImageURL', profileImageURL: url });
  };

  useEffect(() => {
    const getProfileImgData = async () => {
      try {
        const response = await getRequestAPI('profile-images/');
        errorHandling(response.ok, response.status, async () => {
          const successData = await response.json();
          setProfileImgSrc([...successData.imageUrls]);
        });
      } catch (error) {
        alert(error);
      }
    };
    getProfileImgData();
  }, []);
  useEffect(() => {
    dispatch({ type: 'profileImageURL', profileImageURL: profileImgSrc[0] });
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
