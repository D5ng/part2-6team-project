import React, { useContext, useEffect, useRef } from 'react';
import * as S from '@Components/modal/Modal.style';
import BadgeRelationship from '@Components/ui/BadgeRelationship';
import formatDate from 'utils/format';
import useKeyEvent from 'hooks/useKeyEvent';
import { createPortal } from 'react-dom';
import { PaperContext } from '@Pages/paper/context/PaperContext';
import useModal from 'hooks/useModal';
import { DELETE_PAPER_MESSAGE } from 'service/message';
import * as Portal from '@Components/portal';
import FONT_STYLE from 'utils/font';
import DeleteModal from './DeleteModal';
import Backdrop from './Backdrop';

function Modal({ onCloseMessage, modalData, layoutId }) {
  const { sender, content, createdAt, profileImageURL, relationship, font, id } = modalData;
  const { messageFetchRequest } = useContext(PaperContext);
  const { modalState, handleOpenModal, handleCloseModal } = useModal();

  useKeyEvent((key) => (key === 'Escape' || key === 'Enter') && onCloseMessage());
  const backdropRef = useRef(null);

  const deleteMessageRequest = async () => {
    await messageFetchRequest({
      url: DELETE_PAPER_MESSAGE(id),
      options: { method: 'DELETE' },
      id,
    });

    onCloseMessage();
    handleCloseModal();
  };
  const messageBox = useRef(null);
  const modal = createPortal(
    <DeleteModal
      onCloseModal={handleCloseModal}
      modalId={id}
      deleteMessage={`${sender} 님의 메시지 삭제`}
      onDeleteEvent={deleteMessageRequest}
    />,
    document.getElementById('modal-root'),
  );

  const backdropHandler = (event) => {
    if (event.target === backdropRef.current) onCloseMessage();
  };

  useEffect(() => {
    document.addEventListener('click', backdropHandler);
    messageBox.current.innerHTML = content;
    return () => document.removeEventListener('click', backdropHandler);
  }, []);

  const backdrop = Portal.Backdrop(<Backdrop onCloseModal={handleCloseModal} />);

  return (
    <S.Backdrop ref={backdropRef}>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
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
          <S.TextBox $font={FONT_STYLE[font]} ref={messageBox} />
        </S.Contents>
        <S.Buttons>
          <S.Button onClick={onCloseMessage}>확인</S.Button>
          <S.EditButton>수정 할래요</S.EditButton>
          <S.DeleteButton onClick={handleOpenModal}>삭제 할래요</S.DeleteButton>
        </S.Buttons>
      </S.Container>
    </S.Backdrop>
  );
}
export default Modal;
