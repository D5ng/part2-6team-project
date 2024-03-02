import React from 'react';
import * as S from '@Components/cardList/CardList.style';
import ImageGallery from '@Components/cardList/ImageGallery';
import AddCardButton from '@Components/cardList/AddCardButton';

const colorMap = {
  beige: 'var(--orange200)',
  purple: 'var(--primary200)',
  blue: 'var(--blue200)',
  green: 'var(--green200)',
};
function getColor(color) {
  return colorMap[color];
}

function Card({ list }) {
  const { backgroundColor, backgroundImageURL, name, members, recentMessages, topReactions } = list;
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
              <ImageGallery imageArray={recentMessages?.map((item) => item.profileImageURL)} imageCount={members} />
              <p>
                <span>{members}</span>
                명이 작성했어요!
              </p>
            </div>
          </S.CardContent>
        </S.CardContentWrapper>
        <S.CardButtonWrapper>
          <S.CardButton>
            {topReactions.map((reaction) => (
              <AddCardButton key={reaction.id} icon={reaction.emoji} initialCount={reaction.count} />
            ))}
          </S.CardButton>
        </S.CardButtonWrapper>
      </S.CardWrapper>
    </S.CardList>
  );
}

export default Card;
