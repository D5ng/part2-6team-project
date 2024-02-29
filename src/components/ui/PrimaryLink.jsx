import React from 'react';
import * as S from '@Components/ui/PrimaryComponent.style';

function PrimaryLink({ children, url }) {
  return <S.PrimaryLink to={url}>{children}</S.PrimaryLink>;
}

export default PrimaryLink;
