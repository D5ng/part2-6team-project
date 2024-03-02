import React from 'react';
import * as S from '@Components/CardList/CardList.style';
import ImageGallery from '@Components/CardList/ImageGallery';
import AddCardButton from '@Components/CardList/AddCardButton';

const colorMap = {
  beige: 'var(--orange200)',
  purple: 'var(--primary200)',
  blue: 'var(--blue200)',
  green: 'var(--green200)',
};
function getColor(color) {
  return colorMap[color];
}

function Card({ backgroundColor, backgroundImageURL, name, members, imageArray, topReactions }) {
  const backgroundColorDate = getColor(backgroundColor);

  return (
    <S.CardList $backgroundColor={backgroundColorDate} $backgroundImageURL={backgroundImageURL}>
      <S.CardWrapper>
        <S.CardContentWrapper>
          <S.CardContent>
            <div>
              <h2>
                To.
                {name}
              </h2>
              <ImageGallery imageArray={imageArray} imageCount={members} />
              <p>
                <span>{members}</span>
                명이 작성했어요!
              </p>
            </div>
          </S.CardContent>
        </S.CardContentWrapper>
        <S.CardButtonWrapper>
          <S.CardButton>
            {topReactions.map((list) => (
              <AddCardButton key={list.id} icon={list.emoji} initialCount={list.count} />
            ))}
          </S.CardButton>
        </S.CardButtonWrapper>
      </S.CardWrapper>
    </S.CardList>
  );
}

export default Card;
