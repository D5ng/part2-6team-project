import React, { useState, useRef, useEffect } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import EmojiChoice from '../PaperHeader/EmojiChoice';
import { ADD_EMOJI_ICON_PATH } from './constant';

function OutlinedEmojiBtn() {
  const [isEmojiChoiceHidden, setEmojiChoiceHidden] = useState(true);
  const emojiChoiceRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (emojiChoiceRef.current && !emojiChoiceRef.current.contains(event.target)) {
        setEmojiChoiceHidden(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [emojiChoiceRef]);

  const toggleEmojiChoice = () => {
    setEmojiChoiceHidden((prevHidden) => !prevHidden);
  };

  return (
    <>
      <S.EmojiAddBtn onClick={toggleEmojiChoice}>
        <S.ButtonIconImg src={ADD_EMOJI_ICON_PATH} alt="이모지 추가 버튼 아이콘" />
        <S.AddText>추가</S.AddText>
      </S.EmojiAddBtn>

      <S.EmojiChoiceBox hidden={isEmojiChoiceHidden} ref={emojiChoiceRef}>
        <EmojiChoice />
      </S.EmojiChoiceBox>
    </>
  );
}

export default OutlinedEmojiBtn;
