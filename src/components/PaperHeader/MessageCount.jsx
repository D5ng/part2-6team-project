import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/MessageCount.style';

import { PaperContext } from '@Paper/context/PaperContext';
import ImageGallery from '@Components/paperCard/ImageGallery';

function MessageCount() {
  const { paperState } = useContext(PaperContext);

  return (
    <S.MessageCount>
      <ImageGallery
        imageArray={paperState?.data?.recentMessages.map((item) => item.profileImageURL)}
        imageCount={paperState?.data?.messageCount}
      />

      <p>
        {paperState?.data?.messageCount}
        <span>명이 작성했어요!</span>
      </p>
    </S.MessageCount>
  );
}
export default MessageCount;
