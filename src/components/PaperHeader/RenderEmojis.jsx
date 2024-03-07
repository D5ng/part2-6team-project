import React from 'react';
import * as S from '@Components/PaperHeader/TopEmojis.style';

const RenderEmojis = (reactions) =>
  reactions.map((item) => (
    <S.BadgeBox key={item.id}>
      <p>
        {item.emoji}
        <span>{item.count}</span>
      </p>
    </S.BadgeBox>
  ));

export default RenderEmojis;
