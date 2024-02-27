import React from 'react';
import * as S from '@Components/ui/Badge.imogi.style';

const badge = [
  {
    emoji: '👍',
    count: 16,
  },
  {
    emoji: '😍',
    count: 5,
  },
  {
    emoji: '😢',
    count: 19,
  },
];

function BadgeImogi() {
  return (
    <S.BadgeContainer>
      {badge.map((item) => (
        <S.BadgeBox>
          <S.BadgeEmoji>{item.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{item.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </S.BadgeContainer>
  );
}

export default BadgeImogi;
