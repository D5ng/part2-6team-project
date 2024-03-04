import React, { useEffect, useState } from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';
import fetchapi from './api';

function BadgeEmogi() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchUserImg = async () => {
      try {
        const data = await fetchapi();
        setBadges(data.results || []);
      } catch (error) {
        console.error('Error fetching badges:', error.message);
      }
    };
    fetchUserImg();
  }, []);

  return (
    <S.BadgeContainer>
      {badges.map((badge) => (
        <S.BadgeBox key={badge.id}>
          <S.BadgeEmoji>{badge?.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{badge?.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </S.BadgeContainer>
  );
}

export default BadgeEmogi;
