import React, { useContext } from 'react';
import * as S from '@Paper/components/PaperContents.style';
import RollingPaperList from '@Paper/components/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';
import colorMap from 'utils/backgroundColor';

function PaperContents() {
  const { paperState } = useContext(PaperContext);
  const { data } = paperState || {};

  function getColor(color) {
    const backgroundColor = colorMap.find((item) => item.key === color);
    return backgroundColor?.color;
  }

  const isBackgroundImage = data?.backgroundImageURL;
  const isBackgroundColor = !isBackgroundImage && data?.backgroundColor;
  const backgroundColor = getColor(isBackgroundColor);

  return (
    <S.Section $backgroundColor={backgroundColor} $backgroundImage={isBackgroundImage}>
      <S.PaperWrapper>
        <RollingPaperList />
      </S.PaperWrapper>
    </S.Section>
  );
}

export default PaperContents;
