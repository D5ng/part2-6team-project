import React from 'react';
import * as S from '@Components/DeleteButton.style';

function DeleteButton({ disabled }) {
  return (
    <S.DeleteButton disabled={disabled}>
      <S.DeleteIcon
        src={
          disabled
            ? '/images/icons/delete-white.svg'
            : '/images/icons/delete.svg'
        }
        alt=""
      />
    </S.DeleteButton>
  );
}

export default DeleteButton;
