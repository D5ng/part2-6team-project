import React from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';

function BadgeEmogi({ emojis, parent }) {
  const isCardComponent = parent === 'PaperCard';

  return emojis?.length > 0 ? (
    <>
      {emojis.map((badge) => (
        <S.BadgeBox key={badge?.emoji}>
          <S.BadgeEmoji>{badge?.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{isCardComponent && badge?.count >= 100 ? '99+' : badge?.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </>
  ) : (
    <S.NoEmogiText>이모지를 추가해주세요</S.NoEmogiText>
  );
}

export default BadgeEmogi;
