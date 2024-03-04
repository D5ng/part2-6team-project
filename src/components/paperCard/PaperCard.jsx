import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';
import colorMap from 'utils/backgroundColor';
import { useNavigate } from 'react-router-dom';
import ReactionButton from './ReactionButton';
import CardContent from './CardContent';

function getColor(color) {
  return colorMap[color];
}

function PaperCard({ list }) {
  const navigate = useNavigate();

  const { id, backgroundColor, backgroundImageURL } = list;
  const backgroundColorDate = getColor(backgroundColor);
  return (
    <S.PaperCard
      $backgroundColor={backgroundColorDate}
      $backgroundImageURL={backgroundImageURL}
      onClick={() => navigate(`/post/${id}`)}
    >
      <S.CardWrapper>
        <CardContent list={list} />
        <ReactionButton list={list} />
      </S.CardWrapper>
    </S.PaperCard>
  );
}

export default PaperCard;
