import React from 'react';
import * as S from '@Components/ui/PrimaryComponent.style';

function PrimaryCardModalBtn({ children, onClick }) {
  return <S.PrimaryCardModalBtn onClick={onClick}>{children}</S.PrimaryCardModalBtn>;
}

export default PrimaryCardModalBtn;
