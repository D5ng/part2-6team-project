import React from 'react';
import * as S from '@Components/Card/Card.style';
import getDate from 'utils/format';

function Card({ name, profileImg, label, text, date }) {
  return (
    <S.Card>
      <S.Wrapper>
        <S.ProfoleWrapper>
          <S.Profile>
            <S.ProfileImg>
              <img src={profileImg} alt="profileImg" />
            </S.ProfileImg>
            <S.ProfileContent>
              <S.ProfileName>
                <p>
                  From.
                  <span>{name}</span>
                </p>
              </S.ProfileName>
              <S.ProfileLabel>
                <span>{label}</span>
              </S.ProfileLabel>
            </S.ProfileContent>
          </S.Profile>
        </S.ProfoleWrapper>
        <S.Text>{text}</S.Text>
        <S.Date>{getDate(date)}</S.Date>
      </S.Wrapper>
    </S.Card>
  );
}

export default Card;
