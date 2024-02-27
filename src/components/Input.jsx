import React from 'react';
import * as S from '@Components/Input.style';

function Input({ disabled, error }) {
  return (
    <S.Input>
      <S.InputElement
        placeholder="Placeholder"
        disabled={disabled}
        error={error}
      />
      {error && <S.Error>Error Message</S.Error>}
    </S.Input>
  );
}

export default Input;
