import React, { useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import Toast from './Toast';
import KakaoShareButton from '../../pages/post/components/KakaoShareButton';

function OutlinedShareBtn() {
  const [hidden, setHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const currentUrl = window.location.href;

    copy(currentUrl);

    setIsCopied(true);
    setHidden(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };
  return (
    <>
      <S.ShareBtn onClick={() => setHidden(!hidden)}>
        <S.ButtonIconImg src="/images/icons/shareIcon.svg" alt="공유버튼 아이콘" />
      </S.ShareBtn>
      <S.Wrap hidden={hidden}>
        <KakaoShareButton />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
