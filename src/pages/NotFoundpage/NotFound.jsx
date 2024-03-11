import React from 'react';
import * as S from './NotFound.style';

function NotFound() {
  return (
    <S.NotFound>
      <S.Image src="/images/NotFoundImg.png" alt="" />
      <S.NotFoundContainer>
        <h1>404 ERROR</h1>
        <p>Sorry, page Not Found</p>
        <S.Button to="/">홈으로</S.Button>
      </S.NotFoundContainer>
    </S.NotFound>
  );
}

export default NotFound;
