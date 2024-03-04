import React from 'react';
import * as S from '@Components/ui/DeleteButton.style';
import { DELETE_ICON_PATH, DISABLED_DELETE_ICON_PATH } from './constant';

function DeleteButton({ disabled }) {
  return (
    <S.DeleteButton disabled={disabled}>
      <S.DeleteIcon src={disabled ? DISABLED_DELETE_ICON_PATH : DELETE_ICON_PATH} alt="Delete Icon" />
    </S.DeleteButton>
  );
}

export default DeleteButton;
