import React from 'react';
import * as S from '@Components/form/Input.style';

function Input({ children, error, value, onChange, onBlur }) {
  return (
    <S.Input>
      <S.InputElement placeholder={children} $error={error} value={value} onChange={onChange} onBlur={onBlur} />
      <S.Error $error={error}>{error}</S.Error>
    </S.Input>
  );
}

export default Input;
