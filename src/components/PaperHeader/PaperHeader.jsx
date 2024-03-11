import React, { useContext, useEffect, useState } from 'react';
import * as S from '@Components/PaperHeader/PaperHeader.style';
import { PaperContext } from '@Paper/context/PaperContext';
import OutlinedEmojiButton from '@Components/ui/OutlinedEmojiButton';
import OutlinedShareBtn from '@Components/ui/OutlinedShareBtn';
import Skeleton from '@Components/PaperHeader/Skeleton';
import ViewReactionsButton from '@Components/PaperHeader/ViewReactionsButton';
import BadgeEmogi from '@Components/ui/BadgeEmogi';
import MetaTag from '@Pages/SEOMetaTag';
import DeleteButton from '@Components/ui/DeleteButton';
import DeleteModal from '@Components/modal/DeleteModal';
import Backdrop from '@Components/modal/Backdrop';
import { createPortal } from 'react-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePaper } from '@Pages/form/api';
import useModal from 'hooks/useModal';
import MessageCount from './MessageCount';
import { PaperHeaderContext } from './context/PaperHeaderContext';

function PaperHeader() {
  const { paperState } = useContext(PaperContext);
  const { topReactions, fetchRequest } = useContext(PaperHeaderContext);
  const { isLoading } = paperState;
  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  const { recipientsId } = useParams();
  const navigate = useNavigate();

  const recipientName = paperState?.data?.name;

  const deletePaperRequest = async () => {
    await deletePaper(recipientsId);
    handleOpenModal();
    navigate('/list', { replace: true });
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  const backdrop = createPortal(<Backdrop onCloseModal={handleCloseModal} />, document.getElementById('backdrop-root'));
  const modal = createPortal(
    <DeleteModal
      onCloseModal={handleCloseModal}
      onDeleteEvent={deletePaperRequest}
      deleteMessage={`${paperState.data?.name} 님의 페이퍼 삭제`}
    />,
    document.getElementById('modal-root'),
  );

  return (
    <S.PaperHeader>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
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
        <OutlinedShareBtn emojiCount={topReactions} />
        <DeleteButton onOpenModal={handleOpenModal} />
      </S.PaperUtility>
    </S.PaperHeader>
  );
}
export default PaperHeader;
