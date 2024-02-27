import React from 'react';
import * as S from '@Components/AddButton.style';

function AddButton({ disabled }) {
  return (
    <S.AddButton disabled={disabled}>
      <S.PlusIcon src="/images/icons/add.svg" alt="" />
    </S.AddButton>
  );
}

export default AddButton;
