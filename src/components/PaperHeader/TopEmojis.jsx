import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/TopEmojis.style';
import { PaperHeaderContext } from '@Components/PaperHeader/context/PaperHeaderContext';
import RenderEmojis from '@Components/PaperHeader/RenderEmojis';

function TopEmojis() {
  const { topReactions } = useContext(PaperHeaderContext);

  return (
    <S.TopEmojis>{topReactions.length > 0 ? RenderEmojis(topReactions) : <p>이모지를 추가해주세요!</p>}</S.TopEmojis>
  );
}

export default TopEmojis;
