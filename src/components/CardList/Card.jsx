import React from 'react';
import * as S from '@CardList/CardList.style';
import ImageGallery from '@CardList/ImageGallery';
import AddCardButton from '@CardList/AddCardButton';

function Card({ name, members, imageArray }) {
  return (
    <S.CardList>
      <S.CardWrapper>
        <S.CardContentWrapper>
          <S.CardContent>
            <div>
              <h2>
                To.
                {name}
              </h2>
              <ImageGallery imageArray={imageArray} />
              <p>
                <span>{members}</span>
                명이 작성했어요!
              </p>
            </div>
          </S.CardContent>
        </S.CardContentWrapper>
        <S.CardButtonWrapper>
          <S.CardButton>
            <AddCardButton icon="👍" initialCount={20} />
            <AddCardButton icon="😍" initialCount={12} />
            <AddCardButton icon="😢" initialCount={7} />
          </S.CardButton>
        </S.CardButtonWrapper>
      </S.CardWrapper>
    </S.CardList>
  );
}

export default Card;
