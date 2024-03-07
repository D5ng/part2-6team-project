import React, { useContext } from 'react';
import * as S from '@Pages/paper/components/paperHeader/PaperHeader.style';
import OutlinedEmojiBtn from '@Components/ui/OutlinedEmojiBtn';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import { PaperContext } from '@Paper/context/PaperContext';
import MessageCount from './MessageCount';
import TopEmojis from './TopEmojis';
import EmojiCountBtn from './EmojiCountBtn';

function PaperHeader() {
  const { paperState } = useContext(PaperContext);
  const { data } = paperState || {};
  const { name } = data || {};

  return (
    <S.PaperHeader>
      <S.RecipientName>{`to ${name}`}</S.RecipientName>
      <S.PaperUtility>
        <MessageCount />
        <TopEmojis />
        <EmojiCountBtn />
        <OutlinedEmojiBtn />
        <OutlinedShareBtn />
      </S.PaperUtility>
    </S.PaperHeader>
  );
}

export default PaperHeader;
