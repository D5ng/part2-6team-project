import React, { useState } from 'react';
import * as S from '@Components/form/Input.style';

function Input({ children, disabled, errorMessage }) {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setIsTyping(true);
  };

  return (
    <S.Input>
      <S.InputElement
        placeholder={children}
        disabled={disabled}
        $error={!inputValue && isTyping}
        value={inputValue}
        onChange={handleInputChange}
      />
      {!inputValue && isTyping && <S.Error>{errorMessage}</S.Error>}
    </S.Input>
  );
}

export default Input;
