import React from 'react';
import * as S from '@Components/modal/DeleteModal.style';
import { useParams, useNavigate } from 'react-router-dom';
import { deletePaper } from '@Pages/form/api';

function DeleteModal({ onCloseModal, paperState }) {
  const navigate = useNavigate();
  const paperId = useParams();
  const paperName = paperState?.data?.name;

  const handleDelete = async () => {
    await deletePaper(paperId.recipientsId);
    navigate('/list', { replace: true });
  };

  const handleConfirmClick = async () => {
    handleDelete();
  };
  const handleCancelClick = () => {
    onCloseModal();
  };

  return (
    <S.Container>
      <S.Contents>
        <S.DeleteIcon src="/images/delete-confirm.png" alt="" />
        <S.TextBox>
          <S.MainText>{`${paperName} 님의 페이퍼 삭제`}</S.MainText>
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
