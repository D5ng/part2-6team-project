/* eslint-disable no-new */
import React, { useContext } from 'react';
import * as S from '@Paper/components/RollingPaperList.style';
import PlusIcon from '@Components/ui/PlusIcon';
import { PaperContext } from '@Paper/context/PaperContext';
import Modal from '@Components/modal/Modal';
import { createPortal } from 'react-dom';
import Backdrop from '@Components/modal/Backdrop';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Sortable from 'sortablejs';
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

  const renderSkeletons = (count) => Array.from({ length: count }).map((_, index) => <Skeleton key={index} />);

  const renderMessageItems = messageState?.data?.results?.map((info) => (
    <RollingPaperItem key={info.id} data={info} onClickModal={handleOpenModal} getPaperData={getModalData} />
  ));

  const renderEndLoadingUI = messageState?.data?.next && (
    <>
      <Skeleton ref={ref} />
      {renderSkeletons(6)}
    </>
  );

  const columns = document.querySelectorAll('.column');
  columns.forEach((column) => {
    new Sortable(column, {
      filter: '.filtered',
      animation: 150,
      ghostClass: 'sortable-ghost',
    });
  });

  return (
    <S.GridLayout className="column">
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.CreatePaperArea className="filtered">
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {messageState?.data?.results ? renderMessageItems : renderSkeletons(11)}
      {renderEndLoadingUI}
    </S.GridLayout>
  );
}

export default RollingPaperList;
