import React, { useContext, useState } from 'react';
import * as S from '@Paper/components/RollingPaperList.style';
import PlusIcon from '@Components/ui/PlusIcon';
import { PaperContext } from '@Paper/context/PaperContext';
import Modal from '@Components/modal/Modal';
import { createPortal } from 'react-dom';
import Backdrop from '@Components/modal/Backdrop';
import RollingPaperItem from './RollingPaperItem';
import Skeleton from './Skeleton';

function RollingPaperList() {
  const {
    paperState,
    messageState,
    modal: { modalState, handleOpenModal, handleCloseModal, getModalData },
  } = useContext(PaperContext);

  const backdrop = createPortal(<Backdrop onCloseModal={handleCloseModal} />, document.getElementById('backdrop-root'));
  const modal = createPortal(
    <Modal onCloseModal={handleCloseModal} modalData={modalState.data} />,
    document.getElementById('modal-root'),
  );

  const isLoading = paperState.isLoading && messageState.isLoading;

  return (
    <S.GridLayout>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.CreatePaperArea>
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {isLoading && Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)}
      {messageState?.data?.results?.map((info) => (
        <RollingPaperItem key={info.id} data={info} onClickModal={handleOpenModal} getPaperData={getModalData} />
      ))}
    </S.GridLayout>
  );
}

export default RollingPaperList;
