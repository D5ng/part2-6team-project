/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/ui/BadgeRelationship.style';
import { BADGES } from './constant';

function BadgeRelationship({ relationship }) {
  const badge = BADGES[relationship];

  return (
    <S.BadgeContainer>
      <S.BadgeItem $bgColor={badge.bgColor} $textColor={badge.textColor}>
        {relationship}
      </S.BadgeItem>
    </S.BadgeContainer>
  );
}

export default BadgeRelationship;
