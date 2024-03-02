/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/messageCard/MessageCard.style';
import formatDate from 'utils/format';
import MessageProfile from './MessageProfile';

function Card({ data }) {
  const { content, createdAt } = data;
  return (
    <S.Card>
      <S.Wrapper>
        <MessageProfile data={data} />
        <S.Text>{content}</S.Text>
        <S.Date>{formatDate(createdAt)}</S.Date>
      </S.Wrapper>
    </S.Card>
  );
}

export default Card;
