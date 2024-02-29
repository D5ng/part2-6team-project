/* eslint-disable max-len */
import React from 'react';
import * as S from '@Components/form/Input.style';

function Input({ children, error, value, onChange }) {
  const handleInputChange = (e) => {
    onChange(e);
  };

  return (
    <S.Input>
      <S.InputElement placeholder={children} $error={error} value={value} onChange={handleInputChange} />
      <S.Error>{error && '이름을 입력해 주세요'}</S.Error>
    </S.Input>
  );
}

export default Input;
