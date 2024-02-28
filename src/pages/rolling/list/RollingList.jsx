import React from 'react';
import PopularPaper from '@List/components/PopularPaper';
import LatestPaper from '@List/components/LatestPaper';
import * as S from '@List/RollingList.style';

function RollingList() {
  return (
    <>
      <S.Section>
        <S.Wrapper>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <PopularPaper />
        </S.Wrapper>
      </S.Section>

      <S.Section>
        <S.Wrapper>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐️️</S.Title>
          <LatestPaper />
        </S.Wrapper>
      </S.Section>
    </>
  );
}

export default RollingList;
