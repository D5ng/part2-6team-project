import React, { useContext } from 'react';
import * as S from '@Paper/components/PaperContents.style';
import RollingPaperList from '@Paper/components/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';

function PaperContents() {
  const { paperState } = useContext(PaperContext);

  const background = paperState?.data?.backgroundImageURL || paperState?.data?.backgroundColor;

  return (
    <S.Section $background={background}>
      <S.PaperWrapper>
        <RollingPaperList />
      </S.PaperWrapper>
    </S.Section>
  );
}

export default PaperContents;
