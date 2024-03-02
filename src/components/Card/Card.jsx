/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/Card/Card.style';
import formatDate from 'utils/format';
import { BadgeItem, badge } from '@Components/ui/Badge.relationship';

function Card({ name, profileImg, labelName, text, date }) {
  const label = badge.filter((relationship) => relationship.relationship === labelName)[0];
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
              <BadgeItem relationship={label.relationship} bgColor={label.bgColor} textColor={label.textColor}>
                {label.relationship}
              </BadgeItem>
            </S.ProfileContent>
          </S.Profile>
        </S.ProfoleWrapper>
        <S.Text>{text}</S.Text>
        <S.Date>{formatDate(date)}</S.Date>
      </S.Wrapper>
    </S.Card>
  );
}

export default Card;
