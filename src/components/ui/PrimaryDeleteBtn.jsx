import React from 'react';
import * as S from '@Components/ui/PrimaryComponent.style';

function PrimaryDeleteBtn({ children, onClick }) {
  return <S.PrimaryDeleteBtn onClick={onClick}>{children}</S.PrimaryDeleteBtn>;
}

export default PrimaryDeleteBtn;
