import React from 'react';
import * as S from 'pages/messageCreateForm/components/PreviewImg.style';

function PreviewImg({ currentImg }) {
  return <S.Img src={currentImg} />;
}

export default PreviewImg;
