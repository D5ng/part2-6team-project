import React, { useState, useEffect, useRef, useContext } from 'react';
import * as S from '@Components/PaperHeader/ViewReactionsButton.style';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import { ARROW_DOWN_ICON_PATH } from './constant';

function ViewReactionsButton() {
  const { emojis } = useContext(PaperHeaderContext);
  const [isHidden, setIsHidden] = useState(true);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSetIsOpen = () => {
    setIsHidden(!isHidden);
  };

  const handleClickOutside = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsHidden(true);
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
      <S.ViewReactionsButton type="button" onClick={handleSetIsOpen} ref={buttonRef}>
        <img src={ARROW_DOWN_ICON_PATH} alt="이모지추천카운트" />
      </S.ViewReactionsButton>

      <S.ReactionsWrapper hidden={isHidden} ref={wrapRef}>
        <BadgeEmogi emojis={emojis} />
      </S.ReactionsWrapper>
    </S.ViewReactionsContainer>
  );
}

export default ViewReactionsButton;
