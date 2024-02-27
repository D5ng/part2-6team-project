import React from 'react';
import * as S from '@Components/header/Header.style';

function Header() {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <h1>
          <S.StyledLink to="/">
            <S.Image src="/images/icons/logo.svg" alt="" />
            <S.Text>Rolling</S.Text>
          </S.StyledLink>
        </h1>

        <S.Button to="/post">롤링 페이퍼 만들기</S.Button>
      </S.HeaderWrapper>
    </S.Header>
  );
}

export default Header;
