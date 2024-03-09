import React, { useEffect } from 'react';
import * as S from '@Components/modal/Modal.style';
import BadgeRelationship from '@Components/ui/BadgeRelationship';
import formatDate from 'utils/format';
import useKeyEvent from 'hooks/useKeyEvent';

function Modal({ onCloseModal, modalData, layoutId, onSelectedMessage }) {
  const { sender, content, createdAt, profileImageURL, relationship, fonts } = modalData;
  useKeyEvent((key) => (key === 'Escape' || key === 'Enter') && onCloseModal());

  const onClick = () => {
    onCloseModal();
    onSelectedMessage(null);
  };

  return (
    <S.Animation onClick={onClick}>
      <S.Container layoutId={layoutId}>
        <S.Info>
          <S.Profile>
            <S.ProfileImg src={profileImageURL} />
            <S.ProfileTitleContainer>
              <S.ProfileTitle>
                <S.ProfileText>From.</S.ProfileText>
                <S.ProfileName>{sender}</S.ProfileName>
              </S.ProfileTitle>
              <BadgeRelationship relationship={relationship} />
            </S.ProfileTitleContainer>
          </S.Profile>
          <S.CreatAt>{formatDate(createdAt)}</S.CreatAt>
        </S.Info>
        <S.Contents>
          <S.TextBox $font={fonts}>{content}</S.TextBox>
          <S.Button onClick={onClick}>확인</S.Button>
        </S.Contents>
      </S.Container>
    </S.Animation>
  );
}
export default Modal;
