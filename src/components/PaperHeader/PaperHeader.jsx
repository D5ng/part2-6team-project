import React, { useContext, useEffect } from 'react';
import * as S from '@Components/PaperHeader/PaperHeader.style';
import { PaperContext } from '@Paper/context/PaperContext';
import OutlinedEmojiButton from '@Components/ui/OutlinedEmojiButton';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import Skeleton from '@Components/PaperHeader/Skeleton';
import ViewReactionsButton from '@Components/PaperHeader/ViewReactionsButton';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import MessageCount from './MessageCount';
import { PaperHeaderContext } from './context/PaperHeaderContext';

function PaperHeader() {
  const { paperState } = useContext(PaperContext);
  const { isLoading } = paperState;

  const { topReactions, fetchRequest } = useContext(PaperHeaderContext);
  const recipientName = paperState?.data?.name;

  useEffect(() => {
    fetchRequest();
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }
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
