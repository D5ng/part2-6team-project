import React, { useContext } from 'react';
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

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    if (paperState.isLoading || messageState.isLoading) return;
    if (messageState?.data?.next) messageFetchRequest({ url: messageState.data.next });
  };

  const ref = useIntersectionObserver(onIntersect, { threshold: 1 });

  const renderStartLoadingUI =
    !messageState?.data?.results && Array.from({ length: 11 }).map((_, index) => <Skeleton key={index} />);

  const renderMessageData = messageState?.data?.results?.map((info) => (
    <RollingPaperItem key={info.id} data={info} onClickModal={handleOpenModal} getPaperData={getModalData} />
  ));

  const renderEndLoadingUI = messageState?.data?.next && (
    <>
      <Skeleton ref={ref} />
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </>
  );
  return (
    <S.GridLayout>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.CreatePaperArea>
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {renderStartLoadingUI}
      {renderMessageData}
      {renderEndLoadingUI}
    </S.GridLayout>
  );
}

export default RollingPaperList;