import React, { useState, useRef, useEffect } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import EmojiChoice from '../PaperHeader/EmojiChoice';
import { ADD_EMOJI_ICON_PATH } from './constant';

function OutlinedEmojiButton() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target) && !event.target.closest('.ReactionAddBtn')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <S.EmojiAddBtn onClick={handleSetIsOpen} className="ReactionAddBtn">
        <S.ButtonIconImg src={ADD_EMOJI_ICON_PATH} alt="이모지 추가 버튼 아이콘" />
        <S.AddText>추가</S.AddText>
      </S.EmojiAddBtn>

      <S.EmojiChoiceBox hidden={!isOpen} ref={ref}>
        <EmojiChoice />
      </S.EmojiChoiceBox>
    </>
  );
}

export default OutlinedEmojiButton;
