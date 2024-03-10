import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from '@Components/modal/Modal.style';
import BadgeRelationship from '@Components/ui/BadgeRelationship';
import formatDate from 'utils/format';
import useKeyEvent from 'hooks/useKeyEvent';
import { createPortal } from 'react-dom';
import { PaperContext } from '@Pages/paper/context/PaperContext';
import DeleteModal from './DeleteModal';

function Modal({ onCloseModal, modalData, layoutId, onSelectedMessage }) {
  const { sender, content, createdAt, profileImageURL, relationship, fonts } = modalData;
  const { paperState } = useContext(PaperContext);
  const [active, setActive] = useState(false);
  useKeyEvent((key) => (key === 'Escape' || key === 'Enter') && onCloseModal());
  const backdropRef = useRef(null);

  const handleOpenModal = () => setActive(true);
  const handleCloseModal = () => setActive(false);
  const modal = createPortal(
    <DeleteModal onCloseModal={handleCloseModal} paperState={paperState} modalData={modalData} />,
    document.getElementById('modal-root'),
  );

  const onClick = () => onSelectedMessage(null);

  const backdropHandler = (event) => {
    if (event.target === backdropRef.current) onSelectedMessage(null);
  };

  useEffect(() => {
    document.addEventListener('click', backdropHandler);
    return () => document.removeEventListener('click', backdropHandler);
  }, []);

  return (
    <S.Backdrop ref={backdropRef}>
      {active && modal}
      <S.Container
        layoutId={layoutId}
        transition={{
          ease: [0.67, 0.07, 0.34, 0.98],
          duration: 0.5,
        }}
      >
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
        </S.Contents>
        <S.Buttons>
          <S.Button onClick={onClick}>확인</S.Button>
          <S.EditButton>수정 할래요</S.EditButton>
          <S.DeleteButton onClick={handleOpenModal}>삭제 할래요</S.DeleteButton>
        </S.Buttons>
      </S.Container>
    </S.Backdrop>
  );
}
export default Modal;
