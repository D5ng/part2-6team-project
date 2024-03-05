import React, { useState, useEffect, useRef } from 'react';
import * as S from 'pages/post/components/EmojiCountBtn.style';
import BadgeEmogi from '@Components/ui/BadgeEmogi';

function EmojiCountBtn({ onUpdateEmoji, emojis }) {
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
        <BadgeEmogi onUpdateEmoji={onUpdateEmoji} emojis={emojis} />
      </S.Wrap>
    </S.EmojiCountBtn>
  );
}

export default EmojiCountBtn;
