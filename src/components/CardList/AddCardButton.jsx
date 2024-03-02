import React, { useState } from 'react';
import * as S from '@Components/cardList/CardList.style';

function AddCardButton({ icon, initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <S.AddCardButton onClick={handleClick} type="button">
      <div>{icon}</div>
      <div>{count}</div>
    </S.AddCardButton>
  );
}

export default AddCardButton;
