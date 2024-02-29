/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import * as S from '@Paper/components/RollingPaperList.style';
import PlusIcon from '@Components/ui/PlusIcon';
import { PaperContext } from '@Paper/context/PaperContext';
import RollingPaperItem from './RollingPaperItem';
import Skeleton from './Skeleton';

function RollingPaperList() {
  const { paperState, messageState } = useContext(PaperContext);

  return (
    <S.GridLayout>
      <S.CreatePaperArea>
        <S.Button to={`/post/${paperState?.data?.id}/message`}>
          <PlusIcon />
        </S.Button>
      </S.CreatePaperArea>
      {paperState.isLoading &&
        messageState.isLoading &&
        Array.from({ length: 8 }).map((_, index) => <Skeleton key={index} />)}
      {messageState?.data?.results?.map((info) => (
        <RollingPaperItem key={info.id} data={info} />
      ))}
    </S.GridLayout>
  );
}

export default RollingPaperList;
