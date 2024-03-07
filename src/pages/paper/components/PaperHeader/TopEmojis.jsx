import React, { useContext } from 'react';
import * as S from '@Pages/paper/components/paperHeader/TopEmojis.style';
import { PaperHeaderContext } from '@Pages/paper/components/paperHeader/context/PaperHeaderContext';
import RenderEmojis from '@Pages/paper/components/paperHeader/RenderEmojis';

function TopEmojis() {
  const { topReactions } = useContext(PaperHeaderContext);

  return (
    <S.TopEmojis>{topReactions.length > 0 ? RenderEmojis(topReactions) : <p>이모지를 추가해주세요!</p>}</S.TopEmojis>
  );
}

export default TopEmojis;
