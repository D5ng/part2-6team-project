import React from 'react';
import * as S from '@Components/ui/PrimaryComponent.style';

function PrimaryCreateBtn({ children, disabled, onClick }) {
  return (
    <S.PrimaryCreateBtn disabled={!!disabled} type="submit" onClick={onClick}>
      {children}
    </S.PrimaryCreateBtn>
  );
}

export default PrimaryCreateBtn;
