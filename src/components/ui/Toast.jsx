import React from 'react';
import * as S from '@Components/ui/Toast.style';

function Toast() {
  return (
    <S.Toast>
      <S.Toastcontainer>
        <S.ToastIcon src="/images/icons/completed.svg" />
        <S.ToastText>URL이 복사 되었습니다.</S.ToastText>
      </S.Toastcontainer>
      <S.ToastIcon src="/images/icons/close.svg" />
    </S.Toast>
  );
}
export default Toast;
