import React, { useContext, useEffect, useState } from 'react';
import * as S from '@Paper/components/RollingPaperList.style';
import PlusIcon from '@Components/ui/PlusIcon';
import { PaperContext } from '@Paper/context/PaperContext';
import Modal from '@Components/modal/Modal';
import { createPortal } from 'react-dom';
import Backdrop from '@Components/modal/Backdrop';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import RollingPaperItem from './RollingPaperItem';
import Skeleton from './Skeleton';

function RollingPaperList() {
  const {
    paperState,
    messageState,
    modal: { modalState, handleOpenModal, handleCloseModal, getModalData },
    messageFetchRequest,
  } = useContext(PaperContext);

  const backdrop = createPortal(<Backdrop onCloseModal={handleCloseModal} />, document.getElementById('backdrop-root'));
  const modal = createPortal(
    <Modal onCloseModal={handleCloseModal} modalData={modalState.data} />,
    document.getElementById('modal-root'),
  );

  const isLoading = paperState.isLoading || messageState.isLoading;

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    // eslint-disable-next-line no-useless-return
    if ((paperState.isLoading || messageState.isLoading) && !messageState?.data?.next) return;
    messageFetchRequest({ url: messageState.data.next });
  };

  console.log(messageState?.data?.results);

  const ref = useIntersectionObserver(onIntersect, { threshold: 0.1 });

  return (
    <S.GridLayout>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.CreatePaperArea>
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {isLoading && Array.from({ length: 11 }).map((_, index) => <Skeleton key={index} />)}
      {messageState?.data?.results?.map((info) => (
        <RollingPaperItem key={info.id} data={info} onClickModal={handleOpenModal} getPaperData={getModalData} />
      ))}
      {messageState?.data?.next && (
        <>
          {/* {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} />
          ))} */}
          <S.ObserverTarget ref={ref} />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </S.GridLayout>
  );
}

export default RollingPaperList;
