import React from 'react';
import * as S from 'pages/messageCreateForm/components/PreviewImg.style';
import { useMessageFormContext } from '../context/MessageFormContext';

function PreviewImg() {
  const { currentProfileImg } = useMessageFormContext();

  return <S.Img src={currentProfileImg} />;
}

export default PreviewImg;
