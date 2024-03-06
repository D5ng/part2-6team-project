import React, { useState, useEffect, useRef, useContext } from 'react';
import * as S from '@Components/PaperHeader/EmojiCountBtn.style';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import { BadgeBox, BadgeContainer, BadgeCount, BadgeEmoji, NoEmogiContainer } from '@Components/ui/BadgeEmogi.style';

function EmojiCountBtn() {
  const { emojis } = useContext(PaperHeaderContext);
  const [hidden, setHidden] = useState(true);
  const wrapRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapRef.current && !wrapRef.current.contains(event.target)) {
        setHidden(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapRef]);

  return (
    <S.EmojiCountBtn>
      <button type="button" onClick={() => setHidden(!hidden)}>
        <img src="/images/icons/arrow_down.svg" alt="이모지추천카운트" />
      </button>
      <S.Wrap hidden={hidden} ref={wrapRef}>
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
