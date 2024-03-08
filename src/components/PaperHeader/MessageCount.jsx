import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/MessageCount.style';

import { PaperContext } from '@Paper/context/PaperContext';
import ImageGallery from '@Components/paperCard/ImageGallery';

function MessageCount() {
  const { paperState } = useContext(PaperContext);

  const { recentMessages, messageCount } = paperState?.data || {};
  const profileImages = recentMessages?.map((item) => item.profileImageURL) || [];

  return (
    <S.MessageCount>
      <ImageGallery imageArray={profileImages} imageCount={messageCount} />

      <S.MessageCountText>
        {messageCount}
        <span>명이 작성했어요!</span>
      </S.MessageCountText>
    </S.MessageCount>
  );
}
export default MessageCount;
