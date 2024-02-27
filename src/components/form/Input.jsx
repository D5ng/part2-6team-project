import React, { useState } from 'react';
import * as S from '@Components/form/Input.style';

function Input({ disabled, error }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <S.Input>
      <S.InputElement
        placeholder="Placeholder"
        disabled={disabled}
        $error={error}
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && !inputValue && <S.Error>Error Message</S.Error>}
    </S.Input>
  );
}

export default Input;
