import Card from '@Components/card/Card';
import React from 'react';
import CardList from '@Paper/components/RollingPaperItem.style';

function RollingPaperItem({ data, onClickModal, getPaperData }) {
  const handleOpenModal = () => {
    onClickModal();
    getPaperData(data);
  };
  return (
    <CardList onClick={handleOpenModal}>
      <Card
        key={data.id}
        name={data.sender}
        profileImg={data.profileImageURL}
        label={data.relationship}
        text={data.content}
        date={data.createdAt}
      />
    </CardList>
  );
}

export default RollingPaperItem;
