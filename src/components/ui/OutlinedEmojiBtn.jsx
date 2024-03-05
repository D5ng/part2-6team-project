import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import EmojiChoice from '../../pages/post/components/EmojiChoice';
import { ADD_EMOJI_ICON_PATH } from './constant';

function OutlinedEmojiBtn({ onUpdateEmoji }) {
  const [isEmojiChoiceHidden, setEmojiChoiceHidden] = useState(true);

  const toggleEmojiChoice = () => {
    setEmojiChoiceHidden((prevHidden) => !prevHidden);
  };

  return (
    <>
      <S.EmojiAddBtn onClick={toggleEmojiChoice}>
        <S.ButtonIconImg src={ADD_EMOJI_ICON_PATH} alt="이모지 추가 버튼 아이콘" />
        <S.AddText>추가</S.AddText>
      </S.EmojiAddBtn>
      <S.EmojiChoiceBox hidden={isEmojiChoiceHidden}>
        <EmojiChoice onUpdateEmoji={onUpdateEmoji} />
      </S.EmojiChoiceBox>
    </>
  );
}

export default OutlinedEmojiBtn;
