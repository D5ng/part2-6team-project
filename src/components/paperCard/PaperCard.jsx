import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';
import colorMap from 'utils/backgroundColor';
import ReactionButton from './ReactionButton';
import CardContent from './CardContent';

function getColor(color) {
  return colorMap[color];
}

function PaperCard({ list }) {
  const { backgroundColor, backgroundImageURL } = list;
  const backgroundColorDate = getColor(backgroundColor);

  return (
    <S.PaperCard $backgroundColor={backgroundColorDate} $backgroundImageURL={backgroundImageURL}>
      <S.CardWrapper>
        <CardContent list={list} />
        <ReactionButton list={list} />
      </S.CardWrapper>
    </S.PaperCard>
  );
}

export default PaperCard;
