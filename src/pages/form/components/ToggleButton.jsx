import React from 'react';
import * as S from 'pages/form/components/ToggleButton.style';
import { useFormContext } from '../context/FormContext';

function ToggleButton() {
  const { selectedBtn, handleToggleButtonClick } = useFormContext();

  return (
    <S.ToggleButton>
      <S.Button type="button" $isSelected={selectedBtn === 'color'} onClick={() => handleToggleButtonClick('color')}>
        컬러
      </S.Button>
      <S.Button type="button" $isSelected={selectedBtn === 'image'} onClick={() => handleToggleButtonClick('image')}>
        이미지
      </S.Button>
    </S.ToggleButton>
  );
}

export default ToggleButton;
