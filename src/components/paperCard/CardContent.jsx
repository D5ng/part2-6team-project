import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';
import ImageGallery from '@Components/paperCard/ImageGallery';

function CardContent({ list }) {
  const { name, messageCount, recentMessages } = list;
  return (
    <S.CardContent>
      <S.CardContentWrapper>
        <div>
          <h2>
            To.
            {name}
          </h2>
          <ImageGallery imageArray={recentMessages?.map((item) => item.profileImageURL)} imageCount={messageCount} />
          <p>
            <span>{messageCount}</span>
            명이 작성했어요!
          </p>
        </div>
      </S.CardContentWrapper>
    </S.CardContent>
  );
}

export default CardContent;
