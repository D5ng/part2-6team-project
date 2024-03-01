import React from 'react';
import * as S from '@Components/ui/BadgeRelationship.style';

const badge = [
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

function BadgeRelationship() {
  return (
    <S.BadgeContainer>
      {badge.map((item) => (
        <S.BadgeItem key={item.relationship} bgColor={item.bgColor} textColor={item.textColor}>
          {item.relationship}
        </S.BadgeItem>
      ))}
    </S.BadgeContainer>
  );
}

export default BadgeRelationship;
