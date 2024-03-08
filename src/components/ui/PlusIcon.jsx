import React from 'react';
import * as S from '@Components/ui/PlusIcon.style';
import { PLUS_ICON_PATH } from './constant';

function PlusIcon() {
  return (
    <S.PlusIcon>
      <S.Icon src={PLUS_ICON_PATH} alt="" />
    </S.PlusIcon>
  );
}

export default PlusIcon;
