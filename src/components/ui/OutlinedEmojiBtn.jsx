import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import EmojiChoice from '../../pages/post/components/EmojiChoice';

function OutlinedEmojiBtn() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <S.EmojiAddBtn
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        <S.ButtonIconImg src="/images/icons/addEmoji.svg" alt="이모지 추가버튼 아이콘" />
        <S.AddText>추가</S.AddText>
      </S.EmojiAddBtn>
      <S.EmojiChoiceBox hidden={hidden}>
        <EmojiChoice />
      </S.EmojiChoiceBox>
    </>
  );
}

export default OutlinedEmojiBtn;
