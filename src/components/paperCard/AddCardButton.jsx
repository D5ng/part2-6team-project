import React, { useState } from 'react';
import * as S from '@Components/paperCard/PaperCard.style';

function AddCardButton({ icon, initialCount }) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <S.AddCardButton onClick={handleClick} type="button">
      <span>{icon}</span>
      <span>{count}</span>
    </S.AddCardButton>
  );
}

export default AddCardButton;
