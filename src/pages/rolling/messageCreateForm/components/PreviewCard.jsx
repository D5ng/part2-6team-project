import React from 'react';
import * as S from './PreviewCard.style';
import { useMessageFormContext } from '../context/MessageFormContext';

const badgeStyle = {
  지인: {
    bgColor: 'var(--orange100)',
    textColor: 'var(--orange500)',
  },
  동료: {
    bgColor: 'var(--primary100)',
    textColor: 'var(--primary600)',
  },
  가족: {
    bgColor: 'var(--green100)',
    textColor: 'var(--green500)',
  },
  친구: {
    bgColor: 'var(--blue100)',
    textColor: 'var(--blue500)',
  },
};
const DATE = new Date();
const TODAY = `${DATE.getFullYear()}.${DATE.getMonth() + 1}.${DATE.getDate()}`;
function PreviewCard() {
  const { currentProfileImg, fromName, currentSelect, message } = useMessageFormContext();
  const innerMessage = message.ops && message.ops.map((messages) => messages.insert).join('\n');
  return (
    <S.Card>
      <S.SenderBox>
        <S.ProfileImg src={currentProfileImg} />
        <S.Wrap>
          <S.Sender>
            From. <strong>{fromName.target && fromName.target.value}</strong>
          </S.Sender>
          <S.Badge style={badgeStyle[currentSelect.relation]}>{currentSelect.relation}</S.Badge>
        </S.Wrap>
      </S.SenderBox>
      <S.MessageBox>{innerMessage}</S.MessageBox>
      <S.CreateDate>{TODAY}</S.CreateDate>
    </S.Card>
  );
}

export default PreviewCard;
