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
    // messageFetchRequest,
  } = useContext(PaperContext);

  const [page, setPage] = useState(0);

  const backdrop = createPortal(<Backdrop onCloseModal={handleCloseModal} />, document.getElementById('backdrop-root'));
  const modal = createPortal(
    <Modal onCloseModal={handleCloseModal} modalData={modalState.data} />,
    document.getElementById('modal-root'),
  );

  const isLoading = paperState.isLoading || messageState.isLoading;

  const onIntersect = async (entry, observer) => {
    observer.unobserve(entry.target);
    // 페이퍼가 로딩중이 아니고, 메세지가 로딩중이 아니라면
    if (paperState.isLoading || messageState.isLoading) return;
    setPage(page + 1);
  };

  console.log(page);

  const ref = useIntersectionObserver(onIntersect);

  // useEffect(() => {
  //   const options = {
  //     url: `https://api.thedogapi.com/v1/images/search?size=small&format=json&has_breeds=true&order=ASC&page=${page}&limit=10`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-api-key': 'live_NEmiLnyujWqLzQtjiaKNe3tLQBIWdh6OGsO5JDgo0BPeoMUBZYyyjtDIS2mCTTPf',
  //     },
  //   };

  //   messageFetchRequest(options);
  // }, [messageFetchRequest, page]);

  return (
    <S.GridLayout>
      {modalState.isOpen && backdrop}
      {modalState.isOpen && modal}
      <S.CreatePaperArea>
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {/* {isLoading && Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)} */}
      {Array.from({ length: 8 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
      {messageState?.data?.results?.map((info) => (
        <RollingPaperItem key={info.id} data={info} onClickModal={handleOpenModal} getPaperData={getModalData} />
      ))}
      {/* <div style={{ height: '10px' }} /> */}
      <div ref={ref} style={{ height: '10px' }} />
    </S.GridLayout>
  );
}

export default RollingPaperList;
