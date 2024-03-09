import React from 'react';
import * as S from 'pages/messageCreateForm/components/ProfileImgList.style';
import SkeletonProfileImg from './SkeletonPreviewImg';

function ProfileImgList({ unsplashImageState, openModal, dispatch }) {
  const handleProfileImgClick = (url) => {
    dispatch({ type: 'profileImageURL', profileImageURL: url });
  };

  return (
    <S.ProfileImgList>
      <S.ListItem>
        <S.ProfileImg
          src="/images/form/defaultimg.svg"
          alt="프로필 이미지"
          onClick={handleProfileImgClick.bind(this, '/images/form/defaultimg.svg')}
        />
      </S.ListItem>
      {unsplashImageState.data
        ? unsplashImageState.data?.map((image) => (
            <S.ListItem key={image.id}>
              <S.ProfileImg
                src={image.urls.thumb}
                alt="프로필 이미지"
                onClick={handleProfileImgClick.bind(this, image.urls.thumb)}
              />
            </S.ListItem>
          ))
        : Array(9)
            .fill()
            .map((_, i) => (
              <S.ListItem key={i}>
                <SkeletonProfileImg width={56} />
              </S.ListItem>
            ))}
      <S.ListItem>
        <S.SearchBtb onClick={openModal} type="button">
          <S.SearchImg src="/images/icons/searchIcon.svg" alt="프로필 이미지 검색" />
        </S.SearchBtb>
      </S.ListItem>
    </S.ProfileImgList>
  );
}

export default ProfileImgList;
