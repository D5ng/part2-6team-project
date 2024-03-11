/* eslint-disable no-new */
import React, { useContext, useState } from 'react';
import * as S from '@Paper/components/RollingPaperList.style';
import PlusIcon from '@Components/ui/PlusIcon';
import { PaperContext } from '@Paper/context/PaperContext';
import Modal from '@Components/modal/Modal';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Sortable from 'sortablejs';
import { AnimatePresence } from 'framer-motion';
import * as Portal from '@Components/portal';
import RollingPaperItem from './RollingPaperItem';
import Skeleton from './Skeleton';

function RollingPaperList() {
  const {
    paperState,
    messageState,
    modal: { modalState, handleOpenModal, handleCloseModal, getModalData },
    messageFetchRequest,
  } = useContext(PaperContext);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleSelectedMessage = (messageId) => setSelectedMessage(messageId);

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    if (paperState.isLoading || messageState.isLoading) return;
    if (messageState?.data?.next) messageFetchRequest({ url: messageState.data.next });
  };

  const ref = useIntersectionObserver(onIntersect, { threshold: 1 });

  const renderSkeletons = (count) => Array.from({ length: count }).map((_, index) => <Skeleton key={index} />);

  const renderMessageItems = messageState?.data?.results?.map((info) => (
    <RollingPaperItem
      key={info.id}
      data={info}
      onClickModal={handleOpenModal}
      getPaperData={getModalData}
      isOpen={modalState.isOpen}
      onSelectedMessage={handleSelectedMessage}
    />
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

  const modal = Portal.Modal(
    <Modal
      onCloseModal={handleCloseModal}
      modalData={modalState.data}
      layoutId={selectedMessage}
      onSelectedMessage={handleSelectedMessage}
    />,
  );

  return (
    <S.GridLayout className="column">
      <AnimatePresence>
        {selectedMessage && (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>{modal}</>
        )}
      </AnimatePresence>

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
