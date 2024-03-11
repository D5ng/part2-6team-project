import React, { useState, useRef, useEffect } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import ReactionModal from '../PaperHeader/ReactionModal';
import { ADD_EMOJI_ICON_PATH } from './constant';

function OutlinedEmojiButton() {
  const [isHidden, setIsHidden] = useState(true);
  const emojiChoiceRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSetIsOpen = () => {
    setIsHidden(!isHidden);
  };

  const handleClickOutside = (event) => {
    if (
      emojiChoiceRef.current &&
      !emojiChoiceRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [emojiChoiceRef]);

  return (
    <>
      <S.EmojiAddBtn onClick={handleSetIsOpen} ref={buttonRef}>
        <S.ButtonIconImg src={ADD_EMOJI_ICON_PATH} alt="이모지 추가 버튼 아이콘" />
        <S.AddText>추가</S.AddText>
      </S.EmojiAddBtn>
      {!isHidden && (
        <S.EmojiChoiceBox hidden={isHidden} ref={emojiChoiceRef}>
          <ReactionModal />
        </S.EmojiChoiceBox>
      )}
    </>
  );
}

export default OutlinedEmojiButton;
