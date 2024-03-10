/* eslint-disable react/no-danger-with-children */
import React, { useEffect, useRef } from 'react';
import * as S from '@Components/messageCard/MessageCard.style';
import formatDate from 'utils/format';
import MessageProfile from './MessageProfile';

function Card({ data }) {
  const { content, createdAt } = data;
  const text = useRef(null);
  useEffect(() => {
    text.current.innerHTML = content;
  }, []);
  return (
    <S.Card>
      <S.Wrapper>
        <MessageProfile data={data} />
        <S.Text ref={text}>{content}</S.Text>
        <S.Date>{formatDate(createdAt)}</S.Date>
      </S.Wrapper>
    </S.Card>
  );
}

export default Card;
