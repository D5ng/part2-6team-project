import React from 'react';
import Card from '@Components/cardList/Card';
import PROFILE from '@Components/cardList/constant';

function CardList() {
  return (
    <Card name={PROFILE.name} members={PROFILE.members} imageArray={PROFILE.imgArray} background={PROFILE.background} />
  );
}

export default CardList;
