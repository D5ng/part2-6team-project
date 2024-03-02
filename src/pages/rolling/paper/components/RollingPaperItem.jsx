import React from 'react';
import CardList from '@Paper/components/RollingPaperItem.style';
import Card from '@Components/messageCard/MessageCard';

function RollingPaperItem({ data, onClickModal, getPaperData }) {
  const handleOpenModal = () => {
    onClickModal();
    getPaperData(data);
  };
  return (
    <CardList onClick={handleOpenModal}>
      {/* <Card
        key={data.id}
        name={data.sender}
        profileImg={data.profileImageURL}
        label={data.relationship}
        text={data.content}
        date={data.createdAt}
      /> */}

      <Card key={data.id} data={data} />
    </CardList>
  );
}

export default RollingPaperItem;
