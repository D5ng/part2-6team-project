import React from 'react';
import * as S from '@Components/modal/Modal.style';
import BadgeRelationship from '@Components/ui/Badge.relationship';

function Modal() {
  return (
    <S.Container>
      <S.Info>
        <S.Profile>
          <S.ProfileImg src="/images/icons/logo.svg" />
          <S.ProfileTitleContainer>
            <S.ProfileTitle>
              <S.ProfileText>From.</S.ProfileText>
              <S.ProfileName>김동훈</S.ProfileName>
            </S.ProfileTitle>
            <BadgeRelationship />
          </S.ProfileTitleContainer>
        </S.Profile>
        <S.CreatAt>2023.07.08</S.CreatAt>
      </S.Info>
      <S.Contents>
        <S.TextBox $font={fonts}>{content}</S.TextBox>
        <S.Button onClick={onCloseModal}>확인</S.Button>
      </S.Contents>
    </S.Container>
  );
}
export default Modal;
