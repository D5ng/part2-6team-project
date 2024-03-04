import React, { useContext, useEffect, useState } from 'react';
import * as S from '@Components/ui/BadgeEmogi.style';
import { PaperContext } from '@Paper/context/PaperContext';

function BadgeEmogi() {
  const { reactionState } = useContext(PaperContext);
  return reactionState?.data?.results?.length > 0 ? (
    <S.BadgeContainer>
      {reactionState?.data?.results?.map((badge) => (
        <S.BadgeBox key={badge.id}>
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
