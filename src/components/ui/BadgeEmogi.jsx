import React, { useEffect, useState } from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';
import fetchapi from './api';

function BadgeEmogi() {
  const [badge, setBadge] = useState(null);

  useEffect(() => {
    const fetchUserImg = async () => {
      try {
        const data = await fetchapi();
        setBadge(data);
      } catch (error) {
        throw new Error('error');
      }
    };
    fetchUserImg();
  }, []);

  return (
    <S.BadgeContainer>
      {badge?.results?.map((item) => (
        <S.BadgeBox key={item.id}>
          <S.BadgeEmoji>{item?.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{item?.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </S.BadgeContainer>
  );
}

export default BadgeEmogi;
