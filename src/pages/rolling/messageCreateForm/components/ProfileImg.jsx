import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/ProfileImg.style';

function ProfileImg({ imgSrc }) {
  return <S.Img src={imgSrc} alt="프로필 이미지" />;
}

export default ProfileImg;
