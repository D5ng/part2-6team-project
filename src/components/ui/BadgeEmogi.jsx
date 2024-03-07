import React from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';

function BadgeEmogi({ emojis }) {
  return emojis?.length > 0 ? (
    <>
      {emojis.map((badge) => (
        <S.BadgeBox key={badge?.emoji}>
          <S.BadgeEmoji>{badge?.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{badge?.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </>
  ) : (
    <S.NoEmogiText>이모지를 추가해주세요</S.NoEmogiText>
  );
}

export default BadgeEmogi;
