import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from 'pages/post/components/KakaoShareButton';
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

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <>
      <S.ShareBtn onClick={toggleShareButton}>
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
        <S.Wrap hidden={isShareVisible}>
          <KakaoShareButton />
          <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
        </S.Wrap>
      </S.ShareBtn>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
