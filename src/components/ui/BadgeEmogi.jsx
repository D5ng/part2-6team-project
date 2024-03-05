import React, { useContext, useEffect, useState } from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';
import { PaperContext } from '@Paper/context/PaperContext';

function BadgeEmogi({ emojis }) {
  return emojis.length > 0 ? (
    <S.BadgeContainer>
      {emojis.map((badge) => (
        <S.BadgeBox key={badge?.emoji}>
          <S.BadgeEmoji>{badge?.emoji}</S.BadgeEmoji>
          <S.BadgeCount>{badge?.count}</S.BadgeCount>
        </S.BadgeBox>
      ))}
    </S.BadgeContainer>
  ) : (
    <S.NoEmogiContainer>
      <p>이모지가 없습니다.</p>
    </S.NoEmogiContainer>
  );
}

export default BadgeEmogi;
