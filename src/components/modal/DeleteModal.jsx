import React from 'react';
import * as S from '@Components/modal/DeleteModal.style';

function DeleteModal({ onCloseModal, deleteMessage, onDeleteEvent }) {
  return (
    <S.Container>
      <S.Contents>
        <S.DeleteIcon src="/images/delete-confirm.png" alt="" />
        <S.TextBox>
          <S.MainText>{deleteMessage}</S.MainText>
          <S.SubText>삭제하면 복구할 수 없습니다.</S.SubText>
          <S.SubText>정말로 삭제하시겠습니까?</S.SubText>
        </S.TextBox>
        <S.ButtonWrapper>
          <S.DeleteButton onClick={onDeleteEvent}>삭제</S.DeleteButton>
          <S.Button onClick={onCloseModal}>취소</S.Button>
        </S.ButtonWrapper>
      </S.Contents>
    </S.Container>
  );
}
export default DeleteModal;
