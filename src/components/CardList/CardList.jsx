import React from 'react';
import Card from '@CardList/Card';
import PROFILE from '@CardList/constant';

function CardList() {
  return (
    <Card name={PROFILE.name} members={PROFILE.members} imageArray={PROFILE.imgArray} background={PROFILE.background} />
  );
}

export default CardList;
