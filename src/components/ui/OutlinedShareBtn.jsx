import React, { useEffect, useRef, useState } from 'react';
import * as S from '@Components/ui/OutlinedComponent.style';
import copy from 'clipboard-copy';
import KakaoShareButton from '@Components/PaperHeader/KakaoShareButton';
import Toast from './Toast';
import { SHARE_ICON_PATH } from './constant';

function OutlinedShareBtn() {
  const [isHidden, setIsHidden] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSetIsOpen = () => {
    setIsHidden(!isHidden);
  };

  const handleClickOutside = (event) => {
    if (wrapRef.current && !wrapRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
      setIsHidden(true);
    }
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;
    copy(currentUrl);

    setIsCopied(true);
    setIsHidden(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.ShareBtn onClick={handleSetIsOpen} ref={buttonRef}>
        <S.ButtonIconImg src={SHARE_ICON_PATH} alt="공유버튼 아이콘" />
      </S.ShareBtn>

      <S.Wrap hidden={isHidden} ref={wrapRef}>
        <KakaoShareButton />
        <S.ShareOption onClick={handleCopy}>URL 공유</S.ShareOption>
      </S.Wrap>
      {isCopied && <Toast />}
    </>
  );
}

export default OutlinedShareBtn;
