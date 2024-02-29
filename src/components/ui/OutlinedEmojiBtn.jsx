import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';

function OutlinedEmojiBtn() {
  const [hidden, setHidden] = useState(true);
  return (
    <S.EmojiAddBtn
      onClick={() => {
        setHidden(!hidden);
      }}
    >
      <S.ButtonIconImg src="/images/icons/addEmoji.svg" alt="이모지 추가버튼 아이콘" />
      <S.AddText>추가</S.AddText>
    </S.EmojiAddBtn>
  );
}

export default OutlinedEmojiBtn;
