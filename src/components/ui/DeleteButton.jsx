import React from 'react';
import * as S from '@Components/ui/DeleteButton.style';
import { DELETE_ICON_PATH } from '@Components/ui/constant';

function DeleteButton({ onOpenModal }) {
  return (
    <S.DeleteButton onClick={onOpenModal}>
      <S.DeleteIcon src={DELETE_ICON_PATH} alt="Delete Icon" />
    </S.DeleteButton>
  );
}

export default DeleteButton;
