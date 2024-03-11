import React from 'react';
import * as S from '@Components/paperCard/PaperCard.style';
import colorMap from 'utils/backgroundColor';
import { useNavigate } from 'react-router-dom';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import CardContent from './CardContent';

function getColor(color) {
  const backgroundColor = colorMap.find((item) => item.key === color);
  return backgroundColor.color;
}

function getColorPattenr(color) {
  const backgroundColor = colorMap.find((item) => item.key === color);
  return backgroundColor.pattern;
}

function PaperCard({ list }) {
  const navigate = useNavigate();
  const { id, backgroundColor, backgroundImageURL } = list;
  const backgroundColorData = getColor(backgroundColor);
  const backgroundPatternData = getColorPattenr(backgroundColor);

  return (
    <S.PaperCard
      $backgroundColor={backgroundColorData}
      $backgroundImageURL={backgroundImageURL}
      $pattern={backgroundPatternData}
      onClick={() => navigate(`/post/${id}`)}
    >
      <S.CardWrapper>
        <CardContent list={list} />
        <S.BadgeEmogiWrapper>
          <BadgeEmogi emojis={list.topReactions} />
        </S.BadgeEmogiWrapper>
      </S.CardWrapper>
    </S.PaperCard>
  );
}

export default PaperCard;
