import React from 'react';
import Card from '@Components/cardlist/Card';
import PROFILE from '@Components/cardlist/constant';

function CardList() {
  return (
    <Card name={PROFILE.name} members={PROFILE.members} imageArray={PROFILE.imgArray} background={PROFILE.background} />
  );
}

export default CardList;
