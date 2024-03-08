import React from 'react';
import * as S from '@Form/components/ToggleButton.style';
import { useFormContext } from '@Form/context/FormContext';

function ToggleButton() {
  const { selectedBtn, handleToggleButtonClick, unsplashImageState } = useFormContext();
  return (
    <S.ToggleButton>
      <S.Button type="button" $isSelected={selectedBtn === 'color'} onClick={() => handleToggleButtonClick('color')}>
        컬러
      </S.Button>
      {!unsplashImageState.hasError && (
        <S.Button type="button" $isSelected={selectedBtn === 'image'} onClick={() => handleToggleButtonClick('image')}>
          이미지
        </S.Button>
      )}
    </S.ToggleButton>
  );
}

export default ToggleButton;
