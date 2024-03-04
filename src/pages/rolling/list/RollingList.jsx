import React, { useEffect, useState } from 'react';
import PopularPaper from '@List/components/PopularPaper';
import LatestPaper from '@List/components/LatestPaper';
import * as S from '@List/RollingList.style';
import PrimaryLink from '@Components/ui/PrimaryLink';
import { getPopularPapers, getRecentPapers } from '../api';

function RollingList() {
  const [recentPapers, setRecentPapers] = useState([]);
  const [popularPapers, setPopularPapers] = useState([]);

  const handleLoadRecentRecipients = async () => {
    const result = await getRecentPapers();
    if (!result) return;
    const data = result.results;
    setRecentPapers(data);
  };

  const handleLoadPopularRecipients = async () => {
    const result = await getPopularPapers();
    if (!result) return;
    const data = result.results;
    setPopularPapers(data);
  };

  useEffect(() => {
    handleLoadRecentRecipients();
    handleLoadPopularRecipients();
  }, []);

  return (
    <>
      <S.Section>
        <S.Wrapper>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <PopularPaper papers={popularPapers} />
        </S.Wrapper>
      </S.Section>

      <S.Section>
        <S.Wrapper>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐️️</S.Title>
          <LatestPaper papers={recentPapers} />
        </S.Wrapper>
      </S.Section>

      <S.LinkArea>
        <PrimaryLink>나도 만들어보기</PrimaryLink>
      </S.LinkArea>
    </>
  );
}

export default RollingList;
