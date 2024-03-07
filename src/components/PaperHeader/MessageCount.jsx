import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/MessageCount.style';

import { PaperContext } from '@Paper/context/PaperContext';
import ImageGallery from '@Components/paperCard/ImageGallery';

function MessageCount() {
  const { paperState } = useContext(PaperContext);
  const recentMessagesData = paperState?.data?.recentMessages;
  const messageCountData = paperState?.data?.messageCount;

  return (
    <S.MessageCount>
      <ImageGallery
        imageArray={recentMessagesData?.map((item) => item.profileImageURL)}
        imageCount={messageCountData}
      />

      <S.MessageCountText>
        {messageCountData}
        <span>명이 작성했어요!</span>
      </S.MessageCountText>
    </S.MessageCount>
  );
}
export default MessageCount;
