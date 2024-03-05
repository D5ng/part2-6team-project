import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from '@Components/PaperHeader/KakaoShareButton';
import Toast from './Toast';
import { SHARE_ICON_PATH } from './constant';

function OutlinedShareBtn() {
  const [isShareVisible, setShareVisibility] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const toggleShareButton = () => {
    setShareVisibility((prevHidden) => !prevHidden);
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;

    copy(currentUrl);

    setIsCopied(true);
    setShareVisibility(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <>
      <S.ShareBtn onClick={toggleShareButton}>
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
      </S.ShareBtn>
      <S.Wrap hidden={isShareVisible}>
        <KakaoShareButton />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
