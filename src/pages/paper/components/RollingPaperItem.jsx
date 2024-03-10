import React, { useEffect } from 'react';
import CardList from '@Paper/components/RollingPaperItem.style';
import Card from '@Components/messageCard/MessageCard';

function RollingPaperItem({ data, onClickModal, getPaperData, onSelectedMessage }) {
  const handleOpenModal = () => {
    onClickModal();
    getPaperData(data);
    onSelectedMessage(data.id);
  };

  return (
    <CardList onClick={handleOpenModal} layoutId={data.id}>
      <Card key={data.id} data={data} />
    </CardList>
  );
}

export default RollingPaperItem;
