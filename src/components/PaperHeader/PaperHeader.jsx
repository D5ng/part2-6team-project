import React, { useContext, useEffect } from 'react';
import * as S from '@Components/PaperHeader/PaperHeader.style';
import { PaperContext } from '@Paper/context/PaperContext';
import OutlinedEmojiButton from '@Components/ui/OutlinedEmojiButton';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import Skeleton from '@Components/PaperHeader/Skeleton';
import ViewReactionsButton from '@Components/PaperHeader/ViewReactionsButton';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import MetaTag from '@Pages/SEOMetaTag';
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
      {paperState?.data?.name && (
        <MetaTag
          title={`롤링 페이퍼 - ${paperState?.data?.name}의 페이퍼`}
          description={`${paperState?.data?.name}에게 메시지를 전달하고 반응을 남겨주세요.`}
        />
      )}

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
