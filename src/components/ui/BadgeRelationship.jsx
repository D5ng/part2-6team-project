/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/ui/BadgeRelationship.style';

export const badges = [
  {
    relationship: '지인',
    bgColor: 'var(--orange100)',
    textColor: 'var(--orange500)',
  },
  {
    relationship: '동료',
    bgColor: 'var(--primary100)',
    textColor: 'var(--primary600)',
  },
  {
    relationship: '가족',
    bgColor: 'var(--green100)',
    textColor: 'var(--green500)',
  },
  {
    relationship: '친구',
    bgColor: 'var(--blue100)',
    textColor: 'var(--blue500)',
  },
];

export function BadgeRelationship({ relationship }) {
  const filteredBadge = badges.filter((badge) => badge.relationship === relationship)[0];
  return (
    <S.BadgeContainer>
      <S.BadgeItem $bgColor={filteredBadge.bgColor} $textColor={filteredBadge.textColor}>
        {filteredBadge.relationship}
      </S.BadgeItem>
    </S.BadgeContainer>
  );
}
