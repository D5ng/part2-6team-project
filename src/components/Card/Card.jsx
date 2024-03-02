/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/card/Card.style';
import formatDate from 'utils/format';
import { BadgeRelationship, badges } from '@Components/ui/BadgeRelationship';

function Card({ name, profileImg, labelName, text, date }) {
  const label = badges.filter((relationship) => relationship.relationship === labelName)[0];
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
              <BadgeRelationship relationship={label.relationship} bgColor={label.bgColor} textColor={label.textColor}>
                {label.relationship}
              </BadgeRelationship>
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
