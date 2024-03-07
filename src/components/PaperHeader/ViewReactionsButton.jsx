import React, { useState, useEffect, useRef, useContext } from 'react';
import * as S from '@Components/PaperHeader/ViewReactionsButton.style';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import BadgeEmogi from '@Components/ui/BadgeEmogi';

function ViewReactionsButton() {
  const { emojis } = useContext(PaperHeaderContext);
  const [isOpen, setIsOpen] = useState(false);
  const wrapRef = useRef(null);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target) && !event.target.closest('.emojiCountButton')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.ViewReactionsContainer>
      <S.ViewReactionsButton type="button" onClick={handleSetIsOpen} className="emojiCountButton">
        <img src="/images/icons/arrow_down.svg" alt="이모지추천카운트" />
      </S.ViewReactionsButton>

      <S.ReactionsWrapper hidden={!isOpen} ref={wrapRef}>
        <BadgeEmogi emojis={emojis} $isGrid />
      </S.ReactionsWrapper>
    </S.ViewReactionsContainer>
  );
}

export default ViewReactionsButton;
