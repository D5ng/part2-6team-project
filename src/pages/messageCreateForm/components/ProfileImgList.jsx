import React from 'react';
import * as S from 'pages/messageCreateForm/components/ProfileImgList.style';
import SkeletonProfileImg from './SkeletonPreviewImg';
// eslint-disable-next-line import/no-cycle
import { DEFAULT_PROFILE_IMG } from './MessageForm';

function ProfileImgList({ unsplashImageState, openModal, dispatch }) {
  const handleProfileImgClick = (url) => {
    dispatch({ type: 'profileImageURL', profileImageURL: url });
  };

  return (
    <S.ProfileImgList>
      <S.ListItem>
        <S.ProfileImg
          src={DEFAULT_PROFILE_IMG}
          alt="프로필 이미지"
          onClick={handleProfileImgClick.bind(this, DEFAULT_PROFILE_IMG)}
        />
      </S.ListItem>
      {!unsplashImageState.hasError &&
        (unsplashImageState.data
          ? unsplashImageState.data?.map((image) => (
              <S.ListItem key={image.id}>
                <S.ProfileImg
                  src={image.urls.thumb}
                  alt="프로필 이미지"
                  onClick={handleProfileImgClick.bind(this, image.urls.thumb)}
                />
              </S.ListItem>
            ))
          : Array(8)
              .fill()
              .map((_, i) => (
                <S.ListItem key={i}>
                  <SkeletonProfileImg />
                </S.ListItem>
              )))}
      <S.ListItem $visible={!unsplashImageState.hasError}>
        <S.SearchBtb onClick={openModal} type="button">
          <S.SearchImg src="/images/icons/searchIcon.svg" alt="프로필 이미지 검색" />
        </S.SearchBtb>
      </S.ListItem>
    </S.ProfileImgList>
  );
}

export default ProfileImgList;
