import React from 'react';
import * as S from '@Components/ui/Toast.style';
import { ICON_COMPLETED_PATH, ICON_CLOSE_PATH } from './constant';

function Toast({ onClose, isOpen }) {
  console.log(isOpen);
  const handleCloseToast = () => {
    onClose();
  };

  return (
    <S.Toast>
      <S.Toastcontainer>
        <S.ToastIcon src={ICON_COMPLETED_PATH} />
        <S.ToastText>URL이 복사 되었습니다.</S.ToastText>
      </S.Toastcontainer>
      <S.ToastIcon src={ICON_CLOSE_PATH} onClick={handleCloseToast} />
    </S.Toast>
  );
}
export default Toast;
