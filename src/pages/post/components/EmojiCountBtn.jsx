import React, { useState } from 'react';
import * as S from 'pages/post/components/EmojiCountBtn.style';
import BadgeEmogi from '@Components/ui/BadgeEmogi';

function EmojiCountBtn() {
  const [hidden, setHidden] = useState(true);
  return (
    <S.EmojiCountBtn>
      <button type="button" onClick={() => setHidden(!hidden)}>
        <img src="/images/icons/arrow_down.svg" alt="이모지추천카운트" />
      </button>
      <S.Wrap hidden={hidden}>
        <BadgeEmogi />
      </S.Wrap>
    </S.EmojiCountBtn>
  );
}

export default EmojiCountBtn;
