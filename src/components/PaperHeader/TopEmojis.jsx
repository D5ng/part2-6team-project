import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/TopEmojis.style';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';

function TopEmojis() {
  const { topReactions } = useContext(PaperHeaderContext);

  return (
    <S.TopEmojis>
      {topReactions.length > 0 ? (
        topReactions.map((item) => (
          <S.BadgeBox key={item.id}>
            <p>
              {item.emoji}
              <span>{item.count}</span>
            </p>
          </S.BadgeBox>
        ))
      ) : (
        <p>이모지를 추가해주세요!</p>
      )}
    </S.TopEmojis>
  );
}
export default TopEmojis;
