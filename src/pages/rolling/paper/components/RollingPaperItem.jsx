import Card from '@Components/Card/Card';
import React from 'react';
import CardList from '@Paper/components/RollingPaperItem.style';

function RollingPaperItem({ data, onClickModal }) {
  return (
    <CardList onClick={onClickModal}>
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
