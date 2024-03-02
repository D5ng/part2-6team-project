import React from 'react';
import * as S from '@Components/pageCard/PageCard.style';
import ImageGallery from '@Components/pageCard/ImageGallery';
import AddCardButton from '@Components/pageCard/AddCardButton';
import ReactionButton from './ReactionButton';
import CardContent from './CardContent';

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
  const { backgroundColor, backgroundImageURL, name, messageCount, recentMessages, topReactions } = list;
  const backgroundColorDate = getColor(backgroundColor);

  return (
    <S.CardList $backgroundColor={backgroundColorDate} $backgroundImageURL={backgroundImageURL}>
      <S.CardWrapper>
        <CardContent list={list} />
        <ReactionButton list={list} />
      </S.CardWrapper>
    </S.CardList>
  );
}

export default Card;
