import React, { useEffect, useState } from 'react';
import PopularPaper from '@List/components/PopularPaper';
import LatestPaper from '@List/components/LatestPaper';
import * as S from '@List/RollingList.style';
import PrimaryLink from '@Components/ui/PrimaryLink';
import { getPopularPapers, getRecentPapers } from '@List/api/api';
import MetaTag from '@Pages/SEOMetaTag';
import SkeletonList from './components/SkeletonUI';

function RollingList() {
  const [recentPapers, setRecentPapers] = useState([]);
  const [popularPapers, setPopularPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleLoadRecentRecipients = async () => {
    try {
      setIsLoading(true);
      const result = await getRecentPapers();
      if (!result) return;
      const data = result.results;
      setRecentPapers(data);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  const handleLoadPopularRecipients = async () => {
    try {
      setIsLoading2(true);
      const result = await getPopularPapers();
      if (!result) return;
      const data = result.results;
      setPopularPapers(data);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        setIsLoading2(false);
      }, 500);
    }
  };

  useEffect(() => {
    handleLoadRecentRecipients();
    handleLoadPopularRecipients();
  }, []);

  return (
    <>
      <MetaTag title="롤링 페이퍼 - 목록" description="다양한 롤링 페이퍼를 인기순, 최신순으로 구경해 보세요." />
      
      <S.Section>
        <S.Wrapper>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          {isLoading ? <SkeletonList /> : <PopularPaper papers={popularPapers} />}
        </S.Wrapper>
      </S.Section>

      <S.Section>
        <S.Wrapper>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐️️</S.Title>
          {isLoading2 ? <SkeletonList /> : <LatestPaper papers={recentPapers} />}
        </S.Wrapper>
      </S.Section>

      <S.LinkArea>
        <PrimaryLink url="/post">나도 만들어보기</PrimaryLink>
      </S.LinkArea>
    </>
  );
}

export default RollingList;
