import React, { useContext } from 'react';
import * as S from '@Pages/paper/components/paperContents/PaperContents.style';
import RollingPaperList from '@Pages/paper/components/paperContents/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';

function PaperContents() {
  const { paperState } = useContext(PaperContext);
  const { data } = paperState || {};

  const isBackgroundImage = data?.backgroundImageURL;
  const isBackgroundColor = !isBackgroundImage && data?.backgroundColor;
  const defaultBackgroundColor = isBackgroundColor || 'default';

  return (
    <S.Section $backgroundColor={defaultBackgroundColor} $backgroundImage={isBackgroundImage}>
      <S.PaperWrapper>
        <RollingPaperList />
      </S.PaperWrapper>
    </S.Section>
  );
}

export default PaperContents;
