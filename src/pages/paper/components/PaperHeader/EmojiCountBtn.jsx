import React, { useState, useEffect, useRef, useContext } from 'react';
import * as S from '@Pages/paper/components/paperHeader/EmojiCountBtn.style';
import { PaperHeaderContext } from '@Pages/paper/components/paperHeader/context/PaperHeaderContext';
import { BadgeBox, BadgeContainer, BadgeCount, BadgeEmoji, NoEmogiContainer } from '@Components/ui/BadgeEmogi.style';
import { ARROW_DOWN_ICON_PATH } from '@Pages/paper/components/paperHeader/constant';

function EmojiCountBtn() {
  const { emojis } = useContext(PaperHeaderContext);
  const [isHidden, setIsHidden] = useState(true);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsHidden(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapRef]);

  const handleToggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <S.EmojiCountBtn ref={buttonRef}>
      <button type="button" onClick={handleToggleHidden}>
        <img src={ARROW_DOWN_ICON_PATH} alt="이모지추천카운트" />
      </button>
      <S.Wrap hidden={isHidden} ref={wrapRef}>
        {emojis.length > 0 ? (
          <BadgeContainer>
            {emojis.map((badge) => (
              <BadgeBox key={badge?.emoji}>
                <BadgeEmoji>{badge?.emoji}</BadgeEmoji>
                <BadgeCount>{badge?.count}</BadgeCount>
              </BadgeBox>
            ))}
          </BadgeContainer>
        ) : (
          <NoEmogiContainer>
            <p>이모지가 없습니다.</p>
          </NoEmogiContainer>
        )}
      </S.Wrap>
    </S.EmojiCountBtn>
  );
}

export default EmojiCountBtn;
