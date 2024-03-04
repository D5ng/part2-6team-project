import React, { useContext } from 'react';
import * as S from '@Paper/components/PaperContents.style';
import RollingPaperList from '@Paper/components/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';

function PaperContents() {
  const { paperState } = useContext(PaperContext);

  const isBackground = paperState?.data?.backgroundImageURL || paperState?.data?.backgroundColor;
  const defaultBackground = isBackground || 'beige';

  return (
    <S.Section $background={defaultBackground}>
      <S.PaperWrapper>
        <RollingPaperList />
      </S.PaperWrapper>
    </S.Section>
  );
}

export default PaperContents;
