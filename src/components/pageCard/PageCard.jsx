import React from 'react';
import * as S from '@Components/pageCard/PageCard.style';
import colorMap from 'utils/backgroundColor';
import ReactionButton from './ReactionButton';
import CardContent from './CardContent';

function getColor(color) {
  return colorMap[color];
}

function Card({ list }) {
  const { backgroundColor, backgroundImageURL } = list;
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
