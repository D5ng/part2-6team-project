import React, { useContext } from 'react';
import * as S from '@Paper/components/PaperContents.style';
import RollingPaperList from '@Paper/components/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';

function PaperContents() {
  const { paperState } = useContext(PaperContext);

  const isBackgroundImage = paperState?.data?.backgroundImageURL;
  const isBackgroundColor = !isBackgroundImage && paperState?.data?.backgroundColor;
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
