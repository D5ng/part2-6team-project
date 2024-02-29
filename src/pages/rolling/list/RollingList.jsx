import React from 'react';
import PopularPaper from '@List/components/PopularPaper';
import LatestPaper from '@List/components/LatestPaper';
import * as S from '@List/RollingList.style';
import PrimaryLink from '@Components/ui/PrimaryLink';

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

      <S.LinkArea>
        <PrimaryLink>나도 만들어보기</PrimaryLink>
      </S.LinkArea>
    </>
  );
}

export default RollingList;
