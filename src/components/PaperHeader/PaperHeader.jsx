import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/PaperHeader.style';
import OutlinedEmojiBtn from '@Components/ui/OutlinedEmojiBtn';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import { PaperContext } from '@Paper/context/PaperContext';
import EmojiCountBtn from '@Components/PaperHeader/EmojiCountBtn';
import MessageCount from './MessageCount';
import TopEmojis from './TopEmojis';

function PaperHeader() {
  const { paperState } = useContext(PaperContext);

  return (
    <S.PaperHeader>
      <S.RecipientName>{`to ${paperState?.data?.name}`}</S.RecipientName>

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
