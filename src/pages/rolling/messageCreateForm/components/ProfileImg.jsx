import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/ProfileImg.style';
import { useMessageFormContext } from '../context/MessageFormContext';

function ProfileImg({ imgSrc }) {
  const { setProfileImgSrc } = useMessageFormContext();
  const handleImgClick = () => {
    setProfileImgSrc(imgSrc);
  };
  return <S.Img src={imgSrc} alt="프로필 이미지" onClick={handleImgClick} />;
}

export default ProfileImg;
