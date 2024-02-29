import React from 'react';
import * as S from 'pages/rolling/messageCreateForm/components/PreviewImg.style';
import { useMessageFormContext } from '../context/MessageFormContext';

function PreviewImg() {
  const { profileImgSrc } = useMessageFormContext();
  return (
    <S.Background>
      <S.Img src={profileImgSrc} />
    </S.Background>
  );
}

export default PreviewImg;
