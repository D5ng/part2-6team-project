import React, { useContext } from 'react';
import * as S from '@Components/PaperHeader/PaperHeader.style';
import { PaperContext } from '@Paper/context/PaperContext';
import OutlinedEmojiButton from '@Components/ui/OutlinedEmojiButton';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import ViewReactionsButton from '@Components/PaperHeader/ViewReactionsButton';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import { PaperHeaderContext } from './context/PaperHeaderContext';
import MessageCount from './MessageCount';

function PaperHeader() {
  const { paperState } = useContext(PaperContext);
  const { topReactions } = useContext(PaperHeaderContext);
  const recipientName = paperState?.data?.name;

  return (
    <S.PaperHeader>
      <S.RecipientName>{`To. ${recipientName}`}</S.RecipientName>

      <S.PaperUtility>
        <MessageCount />

        <S.TopReactionsWrapper>
          <BadgeEmogi emojis={topReactions} />
        </S.TopReactionsWrapper>
        <ViewReactionsButton />
        
        <OutlinedEmojiButton />
        <OutlinedShareBtn />
      </S.PaperUtility>
    </S.PaperHeader>
  );
}
export default PaperHeader;
