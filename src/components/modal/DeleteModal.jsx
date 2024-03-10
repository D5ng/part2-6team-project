import React from 'react';
import * as S from '@Components/modal/DeleteModal.style';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteMessage, deletePaper } from '@Pages/form/api';

function DeleteModal({ onCloseModal, paperState, modalData, renderMessageItems }) {
  const navigate = useNavigate();
  const paperId = useParams();
  const mainText = modalData?.sender
    ? `${modalData?.sender} 님의 메시지 삭제`
    : `${paperState?.data?.name} 님의 페이퍼 삭제`;

  const handleDeletePaper = async () => {
    await deletePaper(paperId.recipientsId);
    navigate('/list', { replace: true });
  };

  const handleMessagePaper = async () => {
    await deleteMessage(modalData.id);
    window.location.reload();
  };

  const handleConfirmClick = async () => {
    if (modalData?.sender) {
      handleMessagePaper();
    } else {
      handleDeletePaper();
    }
  };
  const handleCancelClick = () => {
    onCloseModal();
  };

  return (
    <S.Container>
      <S.Contents>
        <S.DeleteIcon src="/images/delete-confirm.png" alt="" />
        <S.TextBox>
          <S.MainText>{mainText}</S.MainText>
          <S.SubText>삭제하면 복구할 수 없습니다.</S.SubText>
          <S.SubText>정말로 삭제하시겠습니까?</S.SubText>
        </S.TextBox>
        <S.ButtonWrapper>
          <S.DeleteButton onClick={handleConfirmClick}>삭제</S.DeleteButton>
          <S.Button onClick={handleCancelClick}>취소</S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Container>
  );
}
export default DeleteModal;
