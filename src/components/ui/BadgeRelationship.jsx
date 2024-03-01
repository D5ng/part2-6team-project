/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/ui/BadgeRelationship.style';

export const badge = [
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

export function BadgeItem({ relationship, bgColor, textColor }) {
  return (
    <S.BadgeItem key={relationship} bgColor={bgColor} textColor={textColor}>
      {relationship}
    </S.BadgeItem>
  );
}

export function BadgeRelationship() {
  return (
    <S.BadgeContainer>
      {badge.map((item) => (
        <BadgeItem relationship={item.relationship} bgColor={item.bgColor} textColor={item.textColor}>
          {item.relationship}
        </BadgeItem>
      ))}
    </S.BadgeContainer>
  );
}
