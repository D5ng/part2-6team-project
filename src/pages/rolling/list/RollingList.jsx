import React, { useEffect, useState } from 'react';
import PopularPaper from '@List/components/PopularPaper';
import LatestPaper from '@List/components/LatestPaper';
import * as S from '@List/RollingList.style';
import PrimaryLink from '@Components/ui/PrimaryLink';
import getRecipients from '../api';

function RollingList() {
  const [recipients, setRecipients] = useState([]);

  const handleLoadRecipients = async () => {
    const result = await getRecipients();
    if (!result) return;
    const data = result.results;
    setRecipients(data);
  };

  useEffect(() => {
    handleLoadRecipients();
  }, []);
  
  return (
    <>
      <S.Section>
        <S.Wrapper>
          <S.Title>인기 롤링 페이퍼 🔥</S.Title>
          <PopularPaper recipients={recipients} />
        </S.Wrapper>
      </S.Section>

      <S.Section>
        <S.Wrapper>
          <S.Title>최근에 만든 롤링 페이퍼 ⭐️️</S.Title>
          <LatestPaper recipients={recipients} />
        </S.Wrapper>
      </S.Section>

      <S.LinkArea>
        <PrimaryLink>나도 만들어보기</PrimaryLink>
      </S.LinkArea>
    </>
  );
}

export default RollingList;
