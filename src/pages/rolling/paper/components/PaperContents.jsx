import React, { useContext } from 'react';
import * as S from '@Paper/components/PaperContents.style';
import RollingPaperList from '@Paper/components/RollingPaperList';
import { PaperContext } from '@Paper/context/PaperContext';

function PaperContents() {
  const { paperState } = useContext(PaperContext);

  return (
    <S.Section $bgColor={paperState?.data?.backgroundColor}>
      <S.PaperWrapper>
        <RollingPaperList />
      </S.PaperWrapper>
    </S.Section>
  );
}

export default PaperContents;
